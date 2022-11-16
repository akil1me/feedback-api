import { Link } from "react-router-dom";

import { Button } from "../../../button/";

//images
import sms from "../../../../assets/img/sms.png"

//scss
import "./feedbackItem.scss";


export const FeedbackItem = (props) => {
  return (
    <li className="feed-item position-relative">

      <div className="row">
        <div className="col-1 p-0">
          <button className="feed-item__mark d-flex flex-column align-items-center">
            <span className="feed-item__mark-span1">‸</span>
            <span className="feed-item__mark-span2">{props.likes}</span>
          </button>
        </div>

        <div className="col-11 p-0 d-flex justify-content-between align-items-center">
          <div>
            <Link to={`/detail/${props.id}`} className="feed-item__title">{props.title}</Link>
            <p className="feed-item__description">{props.description}</p>

            <Button description={props.type} />
          </div>

          <div className="d-flex align-items-center">
            <button className="btn">
              <img src={sms} alt="sms" />
            </button>
            <span className="feed-item__num">
              {props.comments?.length}
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}
