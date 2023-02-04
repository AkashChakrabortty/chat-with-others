import { createBrowserRouter } from "react-router-dom";
import Chat from '../Pages/Chat/Chat';
import Device from '../Pages/Device/Device';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from "./PrivateRoute";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/chat",
    element: (
      <PrivateRoute>
        <Chat></Chat>
      </PrivateRoute>
    ),
  },
  {
    path: "/device",
    element: (
      <PrivateRoute>
        <Device></Device>
      </PrivateRoute>
    ),
  },
]);
export default Router;
