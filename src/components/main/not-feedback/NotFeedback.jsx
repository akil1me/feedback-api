import { useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../App";
import notFound from "../../../assets/img/not-found.png";
import { FeedBtn } from "../../button";

import "./not-feedback.scss";

export function NotFeedback() {
  const { login } = useSelector(item => item.login)

  return (
    <li className="not-feedback ">
      <div className="text-center">
        <img src={notFound} alt="not found" width={129} height={136} />
        <h2 className="not-feedback__title">There is no feedback yet.</h2>
        <p className="not-feedback__text">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>

        <FeedBtn text="+ Add Feedback" classs="addBtn" link={login ? "/suggestions/new-feedback" : "/login"} />
      </div>
    </li>
  )
}
