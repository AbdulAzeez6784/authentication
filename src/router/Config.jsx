import Home from "../pages/main/Home";
import Registration from "../pages/main/Registration";
import Login from "../pages/main/Login";
import ErrorMessage from "../pages/main/ErrorMessage";
import UserDetails from "../pages/main/UserDetails";
import Loading from "../pages/main/Loading";
import NoMatchFound from "../pages/main/NoMatchFound";

const Config = [
  {
    key: "home",
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    key: "registration",
    path: "/registration",
    element: <Registration />,
    isPrivate: false,
  },
  {
    key: "login",
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    key: "errorMessage",
    path: "/errorMessage",
    element: <ErrorMessage />,
    isPrivate: false,
  },
  {
    key: "loading",
    path: "/loading",
    element: <Loading />,
    isPrivate: false,
  },
  {
    key: "noMatchFound",
    path: "*",
    element: <NoMatchFound />,
    isPrivate: false,
  },
  {
    key: "userDetails",
    path: "/userDetails",
    element: <UserDetails />,
    isPrivate: true,
  },
];

export default Config;
