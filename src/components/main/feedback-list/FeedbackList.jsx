import { useContext } from "react";
import { AppContext } from "../../../App";
import Loader from "../../loader/Loader";
import { NotFeedback } from "../not-feedback/NotFeedback";
import { FeedbackItem } from "./feedback-item/FeedbackItem";

export const FeedbackList = () => {

  const { feedbackList, loding } = useContext(AppContext);


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