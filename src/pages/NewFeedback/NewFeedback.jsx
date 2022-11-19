import { Container } from "../../components/container/Container"
import GoBack from "../../components/go-back/GoBack"
import NewFeedBackMain from "../../components/new-feedback-main/NewFeedBackMain";

import newFeedBackImg from "../../assets/img/new-feedback.svg";
import { useContext } from "react";
import { AppContext } from "../../App";
import { APP_API } from "../../data/app-api/app-api";
import { useNavigate } from "react-router-dom";

const NewFeedBack = () => {
  const { feedbackList, setFeedbackList } = useContext(AppContext);

  const navigate = useNavigate();

  const hendleFeedbackSubmit = (inputTitle, textValue, selectValue) => {
    const createNewFeedback = {
      id: new Date().getTime(),
      title: inputTitle,
      type: selectValue,
      description: textValue,
      likes: Math.floor(Math.random() * 100),
      comments: [],
      status: "planned",
      isLiked: false,
      commentsCount: 0,
    }

    fetch(APP_API, {
      method: "POST",
      body: JSON.stringify(createNewFeedback),
      headers: {
        "Content-type": "Application/json",
      },

    })
      .then(res => res.json())
      .then(() => {
        return setFeedbackList([...feedbackList, createNewFeedback])
      })
    navigate("/")

  }


  return (
    <div className="mt-3">
      <Container newFeedBack="container-3">
        <GoBack />
        <NewFeedBackMain newFeedBackImg={newFeedBackImg} title="Create New Feedback" onSubmit={hendleFeedbackSubmit} />
      </Container>
    </div>
  )
}

export default NewFeedBack;