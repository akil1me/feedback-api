import { useSelector } from "react-redux";
import icon from "../../../assets/img/icon.svg";
import { FeedBtn } from "../../button/";
import "./addFeedback.scss";

export const AddFeedback = () => {
  const { feedbackList } = useSelector(item => item.feedbacks)
  const { login } = useSelector(item => item.login)

  return (
    <div className="addFeedbeck">
      <div className="addFeedbeck__left-content d-flex align-items-center">
        <img src={icon} alt="icon-me" width={23} height={24} />
        <h4 className="addFeedbeck__title">{feedbackList.length} Suggestions</h4>

        <div className="d-flex ms-5 align-items-center">
          <div>
            <span className="addFeedbeck__span">Sort by :</span>
          </div>
          <div>
            <select className="form-select addFeedbeck__select">
              <option value="most-upvotes">Most Upvotes</option>
              <option value="least-upvotes">Least Upvotes</option>
              <option value="most-comments">Most Comments</option>
              <option value="least-comments">Least Comments</option>
            </select>
          </div>
        </div>
      </div>

      <FeedBtn text="+ Add Feedback" classs="addBtn" link={login ? "/suggestions/new-feedback" : "/login"} />
    </div>
  )
}