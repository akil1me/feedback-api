import { useContext } from "react";

import { useParams } from "react-router-dom";
import { CommentsItem } from "../commentsItem/";

import notfound from "../../../assets/img/not-found.png";
import { DetailContext } from "../../../pages/Detail/Detail";
import { AppContext } from "../../../App";

export const CommentsList = () => {
  const { id } = useParams();
  const { feedbackList } = useContext(AppContext)

  const feedbackFind = feedbackList.find(item => item.id === +id)

  const { feedback } = useContext(DetailContext);

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
