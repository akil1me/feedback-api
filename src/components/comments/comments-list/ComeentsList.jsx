
import { useParams } from "react-router-dom";
import { CommentsItem } from "../commentsItem/";

import { useSelector } from "react-redux";

import notfound from "../../../assets/img/not-found.png";

export const CommentsList = ({ feedback }) => {
  const { id } = useParams();

  const { feedbackList } = useSelector(item => item.feedbacks);

  const feedbackFind = feedbackList.find(item => item.id === +id)



  return (
    <ul className="mt-5">
      {
        (feedbackFind || feedback)?.comments?.length !== 0 ? (feedbackFind || feedback)?.comments?.map(comment => <CommentsItem key={comment.id || id} {...comment} />) :
          <div className="text-center">
            <img src={notfound} alt="notfound" width={130} height={136} />
          </div>
      }
    </ul>
  )
}
