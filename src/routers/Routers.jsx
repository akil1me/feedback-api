import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import NotFound from "../components/not-found/NotFound";
import { Detail } from "../pages/Detail/Detail";
import { EditeFeedBack } from "../pages/EiteFeedback/EditeFeedback";
import { Login } from "../pages/login/login";
import NewFeedBack from "../pages/NewFeedback/NewFeedback";
import Suggestions from "../pages/Suggestions/Suggestions";

const routes = [
  {
    path: "/",
    element: <Suggestions />,
  },

  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "new-feedback",
    element: <NewFeedBack />,
  },

  {
    path: "detail/:id",
    children: [
      {
        path: "",
        element: <Detail />,
      },

      {
        path: "edite-feedback",
        element: <EditeFeedBack />
      }
    ]
  }
]

const loginRout = [
  {
    path: "/login",
    element: <Login />,
  }
]

const Routers = () => {
  const { login } = useSelector(item => item.login);

  const elements = useRoutes([...(!login ? loginRout : []), ...routes]);

  return elements;
}

export default Routers;