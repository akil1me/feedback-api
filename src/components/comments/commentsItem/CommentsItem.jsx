import "./commentItem.scss";
import avatar from "../../../assets/img/avatar-default.svg"

export const CommentsItem = (props) => {

  return (
    <li className="comment-item">
      <div className="d-flex">
        <img className="rounded" src={props.img || avatar} alt={props.name} width={40} height={40} />
        <div className="ms-4">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="comment-item__name mb-0">{props.name}</h6>
              <p className="comment-item__username mb-3">{props.userName}</p>
            </div>
          </div>

          <p className="comment-item__comment">{props.title}</p>
        </div>
      </div>

    </li>
  )
}
