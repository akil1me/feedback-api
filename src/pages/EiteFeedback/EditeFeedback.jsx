import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/container/Container";

// img
import editeFeedBackImg from "../../assets/img/edite-feedback.svg";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import NewFeedBackMain from "../../components/new-feedback-main/NewFeedBackMain";
import { APP_API } from "../../data/app-api/app-api";
import { feedbacksActions } from "../../store/feedbacks/feedbacks.slice";


export const EditeFeedBack = () => {

  const { id } = useParams();

  const { feedbackList } = useSelector(item => item.feedbacks)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [feedback, setFeed] = useState();
  const [ondelete, setDelete] = useState(false)

  useEffect(() => {
    if (!feedback) {
      fetch(APP_API + "/" + id)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then(data => setFeed(data))
        .catch(err => {
          console.log(err);
        })

    }
  }, [id])


  const link = feedbackList.find(data => data.id === +id);

  const hendleFeedbackSubmit = (inputTitle, textValue, selectValue) => {
    const editedFeedback = {
      id: +id,
      title: inputTitle,
      type: selectValue,
      description: textValue,
      commentsCount: link.comments?.length || 0,
      likes: link.likes || 0,
      status: "planned",
      isLiked: false,
      comments: link.comments || [],
    }
    const index = feedbackList.findIndex(item => item.id === +id)

    fetch(APP_API + "/" + id, {
      method: "PUT",
      body: JSON.stringify(editedFeedback),
      headers: {
        "Content-type": "Application/json",
      },

    })
      .then(res => res.json)
      .then(() => {
        dispatch(feedbacksActions.setFeedbackList([...feedbackList.slice(0, index), editedFeedback, ...feedbackList.slice(index + 1)]))
        navigate("/detail/" + id)
      })
  }

  const hendleDeleteFeedback = () => {
    setDelete(true)
    fetch(APP_API + "/" + id, {
      method: "DELETE",
    })
      .then(res => res.json)
      .then(() => {
        const index = feedbackList.findIndex(item => item.id === +id);
        dispatch(feedbacksActions.setFeedbackList([...feedbackList.slice(0, index), ...feedbackList.slice(index + 1)]))
        navigate("/")
      }).finally(() => setDelete(false))
  }

  return (
    feedback ? <div className="mt-3">
      <Container newFeedBack="container-3">
        <Link to={`/detail/${id}`}>{"< Go Back"}</Link>

        <NewFeedBackMain
          editeFeedBackImg={editeFeedBackImg}
          title={`Editing '${feedback.title}'`}
          link={feedback}
          onSubmit={hendleFeedbackSubmit}
          hendleDeleteFeedback={hendleDeleteFeedback}
          ondelete={ondelete}
        />
      </Container>
    </div>
      : <Loader />
  )
}
