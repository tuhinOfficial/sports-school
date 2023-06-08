import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Classes from "../Pages/Classes/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"registration",
                element:<Registration></Registration>
            },
            {
                path:"classes",
                element:<Classes></Classes>
            },
            {
                path:"instructors",
                element: <Instructors></Instructors>
            }

        ]
    },

    {
        path:"dashboard",
        element:<Dashboard></Dashboard>
    }
])

export default router;