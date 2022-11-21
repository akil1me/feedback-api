import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { APP_API } from "../../../data/app-api/app-api";

import { feedbacksActions } from "../../../store/feedbacks/feedbacks.slice";
import Loader from "../../loader/Loader";
import { NotFeedback } from "../not-feedback/NotFeedback";
import { FeedbackItem } from "./feedback-item/FeedbackItem";

export const FeedbackList = () => {
  const { feedbackList, loading } = useSelector(item => item.feedbacks)

  const dispatch = useDispatch();

  useEffect(() => {
    if (feedbackList.length === 0) {
      dispatch(feedbacksActions.setLoading(true))
      fetch(APP_API)
        .then(res => res.json())
        .then(data => dispatch(feedbacksActions.setFeedbackList(data)))
        .finally(() => dispatch(feedbacksActions.setLoading(false)))
    }
  }, []);


  return (
    <ul className="list-unstyled">
      {
        !loading ? (feedbackList.length !== 0 ?
          feedbackList?.map(item => <FeedbackItem {...item} key={item.id} />) :
          <NotFeedback />) : <Loader />
      }
    </ul>
  )
}