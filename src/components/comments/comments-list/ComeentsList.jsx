import { useContext } from "react";

import { AppContext } from "../../../App";

import { useParams } from "react-router-dom";
import { CommentsItem } from "../commentsItem/";

import notfound from "../../../assets/img/not-found.png";

export const CommentsList = () => {
  const { id } = useParams();

  const { feedbackList } = useContext(AppContext)

  const feedBackList = feedbackList.find(item => item.id === +id);

  return (
    <ul className="mt-5" data-id={id}>
      {
        feedBackList.comments.length !== 0 ? feedBackList.comments.map(comment => <CommentsItem key={comment.id || id} {...comment} />) :
          <div className="text-center">
            <img src={notfound} alt="notfound" width={130} height={136} />
          </div>
      }
    </ul>
  )
}
