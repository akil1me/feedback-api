import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginActions } from "../../store/login/login.slice";

export const Login = () => {
  const navigate = useNavigate()

  const emailRef = useRef();
  const passwordRef = useRef();
  const userRef = useRef();

  const dispatch = useDispatch();

  const hendleLoginSubmit = (evt) => {
    evt.preventDefault();

    const loginObj = {
      user: userRef.current.value,
      email: emailRef.current.value,
      passwordRef: passwordRef.current.value,
    }

    dispatch(loginActions.setLogin(loginObj));

    navigate("/");
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card w-50 p-4 ">
        <h1 className="text-center">Login</h1>
        <form autoComplete="off" onSubmit={hendleLoginSubmit}>
          <input ref={userRef} className="form-control mb-2" type="text" required placeholder="user-name" />
          <input ref={emailRef} className="form-control mb-2" type="email" required placeholder="email" />
          <input ref={passwordRef} className="form-control mb-2" type="password" required placeholder="password" />

          <div className="text-end">
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}