//  hooks
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// compornets
import { AddComment, Comments, Container, EditeFeedback, EditeFeedbackList } from "../../components/";
import Loader from "../../components/loader/Loader";
import { APP_API } from "../../data/app-api/app-api";

export const Detail = () => {

  const [feedback, setFeed] = useState();

  const { id } = useParams();

  const { feedbackList } = useSelector(item => item.feedbacks)


  const feedbackFind = feedbackList.find(item => item.id === +id)

  useEffect(() => {
    if (!feedbackFind) {
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

  return (
    <>
      <Container detailePage="container-2">

        {
          (feedback || feedbackFind) ? <>
            <EditeFeedback />
            <EditeFeedbackList feedback={feedback} feedbackFind={feedbackFind} />
            <Comments feedbackFind={feedbackFind} feedback={feedback} />
            <AddComment />
          </>
            :
            <Loader />
        }
      </Container>
    </>
  )
}

