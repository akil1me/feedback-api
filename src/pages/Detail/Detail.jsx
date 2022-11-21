//  hooks
import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// compornets
import { AddComment, Comments, Container, EditeFeedback, EditeFeedbackList } from "../../components/";
import Loader from "../../components/loader/Loader";
import { APP_API } from "../../data/app-api/app-api";

export const DetailContext = createContext()

export const Detail = () => {

  const [feedback, setFeed] = useState();

  const { id } = useParams();

  const { feedbackList } = useSelector(item => item.feedbacks)


  const feedbackFind = feedbackList.find(item => item.id === +id)

  useEffect(() => {
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
  }, [id])

  return (
    <DetailContext.Provider value={{ feedback }}>
      <Container detailePage="container-2">

        {
          feedback ? <>
            <EditeFeedback />
            <EditeFeedbackList feedback={feedback} feedbackFind={feedbackFind} />
            <Comments feedbackFind={feedbackFind} feedback={feedback} />
            <AddComment />
          </>
            :
            <Loader />
        }
      </Container>
    </DetailContext.Provider>
  )
}

