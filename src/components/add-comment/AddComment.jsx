import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { APP_API } from "../../data/app-api/app-api";
import { feedbacksActions } from "../../store/feedbacks/feedbacks.slice";

import { FeedBtn } from "../button/";
import "./addComment.scss";

export const AddComment = () => {
  const { feedbackList } = useSelector(item => item.feedbacks);
  const dispatch = useDispatch()

  const commetRef = useRef();

  const { login } = useSelector(item => item.login)

  const { id } = useParams();

  const link = feedbackList.find(item => item.id === +id)


  const hendleSubmutCommet = (e) => {
    e.preventDefault();


    const newComment = {
      id: new Date().getTime(),
      img: "http://cdn.onlinewebfonts.com/svg/img_264157.png",
      name: login.user,
      userName: login.email,
      title: commetRef.current.value,
    }

    const editedFeedback = {
      ...link,
      comments: [...link.comments, newComment],
    }


    fetch(APP_API + "/" + id, {
      method: "PUT",
      body: JSON.stringify(editedFeedback),
      headers: {
        "Content-type": "Application/json"
      }
    })
      .then(res => res.json())
      .then(() => {
        dispatch(feedbacksActions.setAddComment(editedFeedback))
        commetRef.current.value = "";
      })
  }

  return (
    <div className="position-relative">

      {
        login ? null :
          <div className="d-flex justify-content-center align-items-center bg-dark bg-opacity-25 logg position-absolute top-0 bottom-0 end-0 start-0">
            <Link className="btn btn-primary  px-3" to="/login">
              Add comment
            </Link>
          </div>

      }


      <div className="add-coment card p-4 mt-4 mb-3">
        <div>
          <h5 className="add-coment__title">Add Comment</h5>

          <form autoComplete="off" onSubmit={hendleSubmutCommet}>
            <textarea ref={commetRef} className="add-coment__textarea" placeholder="Type your comment here"></textarea>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="add-coment__span">250 Characters left</span>
              <FeedBtn text="Post Comment" classs="addBtn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
