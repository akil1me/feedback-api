//  hooks
import { useContext } from "react";
import { useParams } from "react-router-dom";

//context
import { AppContext } from "../../App";

// compornets
import { Comments, AddComment, Container, EditeFeedback, EditeFeedbackList } from "../../components/";

const Detail = () => {

  const { feedbackList } = useContext(AppContext)

  const { id } = useParams();

  const feedBackList = feedbackList.find(item => item.id === +id);

  return (
    <Container detailePage="container-2">
      {
        feedBackList ?
          <>
            <EditeFeedback />
            <EditeFeedbackList feedBackList={feedBackList} />
            <Comments feedBackList={feedBackList}  {...feedBackList} />
            <AddComment />
          </> :
          <h3 className="text-center">404 page not found</h3>
      }

    </Container>
  )
}

export default Detail;