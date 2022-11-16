import { useContext } from "react";
import { AppContext } from "../../App";

import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/container/Container";

// img
import editeFeedBackImg from "../../assets/img/edite-feedback.svg";

import NewFeedBackMain from "../../components/new-feedback-main/NewFeedBackMain";


export const EditeFeedBack = () => {

  const { id } = useParams();

  const { feedbackList, setFeedbackList } = useContext(AppContext)

  const link = feedbackList.find(data => data.id === +id);

  const hendleFeedbackSubmit = (inputTitle, textValue, selectValue) => {
    const editedFeedback = {
      id: +id,
      title: inputTitle,
      type: selectValue,
      description: textValue,
      num: link.num || 0,
      likes: link.likes || 0,
      status: "planned",
      isLiked: false,
    }
    const index = feedbackList.findIndex(item => item.id === +id)

    setFeedbackList([...feedbackList.slice(0, index), editedFeedback, ...feedbackList.slice(index + 1)])
  }

  const hendleDeleteFeedback = () => {
    const index = feedbackList.findIndex(item => item.id === +id);
    setFeedbackList([...feedbackList.slice(0, index), ...feedbackList.slice(index + 1)])
  }

  return (

    <div className="mt-3">
      <Container newFeedBack="container-3">
        <Link to={`/detail/${id}`}>{"< Go Back"}</Link>

        <NewFeedBackMain
          editeFeedBackImg={editeFeedBackImg}
          title={`Editing '${link.title}'`}
          link={link}
          onSubmit={hendleFeedbackSubmit}
          hendleDeleteFeedback={hendleDeleteFeedback}
        />
      </Container>
    </div>

  )
}
