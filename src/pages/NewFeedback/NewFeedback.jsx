import { Container } from "../../components/container/Container"
import GoBack from "../../components/go-back/GoBack"
import NewFeedBackMain from "../../components/new-feedback-main/NewFeedBackMain";

import newFeedBackImg from "../../assets/img/new-feedback.svg";
import { useContext } from "react";
import { AppContext } from "../../App";

const NewFeedBack = () => {
  const { feedbackList, setFeedbackList } = useContext(AppContext)

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
    }

    setFeedbackList([createNewFeedback, ...feedbackList])
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