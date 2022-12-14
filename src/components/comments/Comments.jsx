import { CommentsList } from "./comments-list/";

import "./coments.scss";

export const Comments = ({ feedback, feedbackFind }) => {
  return (
    <div className="comments card mt-4 py-3 px-4">
      <div>
        <h2 className="comments__title">Comments: <span className="text-primary">{feedbackFind?.comments?.length || feedback?.comments?.length}</span></h2>
        {
          <CommentsList feedback={feedback} />

        }
      </div>
    </div>
  )
}
