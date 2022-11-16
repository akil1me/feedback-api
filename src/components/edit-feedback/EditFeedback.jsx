import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import { FeedBtn } from "../button/";
import GoBack from "../go-back/GoBack";

export const EditeFeedback = () => {

  const { login } = useContext(AuthContext)

  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <GoBack />
      <FeedBtn link={login ? "edite-feedback" : "/login"} edit="editBtn" text="Edit Feedback" classs={"addBtn"} ></FeedBtn>

    </div>
  )
}

