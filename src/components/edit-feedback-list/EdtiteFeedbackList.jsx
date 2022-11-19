
import { FeedbackItem } from "../main/feedback-list/feedback-item/FeedbackItem";


export const EditeFeedbackList = ({ feedback, feedbackFind }) => {


  return (
    <>
      <ul className="list-unstyled">
        {
          feedbackFind ? <FeedbackItem {...feedbackFind} /> : <FeedbackItem {...feedback} />
        }
      </ul>

    </>
  )
}

export default EditeFeedbackList;