import { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { APP_API } from "../../../data/app-api/app-api";
import Loader from "../../loader/Loader";
import { NotFeedback } from "../not-feedback/NotFeedback";
import { FeedbackItem } from "./feedback-item/FeedbackItem";

export const FeedbackList = () => {
  const { feedbackList, setFeedbackList, setLoading, loding } = useContext(AppContext);

  useEffect(() => {
    if (feedbackList.length === 0) {
      setLoading(true)
      fetch(APP_API)
        .then(res => res.json())
        .then(data => setFeedbackList(data))
        .finally(() => setLoading(false))
    }
  }, []);


  return (
    <ul className="list-unstyled">
      {
        !loding ? (feedbackList.length !== 0 ?
          feedbackList?.map(item => <FeedbackItem {...item} key={item.id} />) :
          <NotFeedback />) : <Loader />
      }
    </ul>
  )
}