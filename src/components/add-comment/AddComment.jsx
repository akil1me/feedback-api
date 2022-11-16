import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext, AuthContext } from "../../App";

import avatarDefault from "../../assets/img/avatar-default.svg"

import { FeedBtn } from "../button/";
import "./addComment.scss"

export const AddComment = () => {
  const { feedbackList, setFeedbackList, commetRef } = useContext(AppContext);
  const { login } = useContext(AuthContext)

  const { id } = useParams();

  const hendleSubmutCommet = (e) => {
    e.preventDefault();

    const newComment = {
      id: new Date().getTime(),
      img: avatarDefault,
      name: login.user,
      userName: login.email,
      title: commetRef.current.value,
      ansver: [],
    }

    const newFeed = feedbackList.map(item => {
      if (item.id === +id) {
        item.comments = [
          ...item.comments, newComment
        ]
      }

      return item
    })

    setFeedbackList(newFeed);
    commetRef.current.value = "";
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
