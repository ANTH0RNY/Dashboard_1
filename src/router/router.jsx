import {createBrowserRouter} from "react-router-dom";
import Main from "../components/main";
import Error from "../Views/errors";
import App from "../App";

  const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <Error/>
    }
])

export default router;