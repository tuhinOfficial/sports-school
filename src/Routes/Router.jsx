import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Classes from "../Pages/Classes/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/UserDashboard/UserDashboard/Payment/Payment";
import UpdateClasses from "../Pages/Instructors/Instructors/MyClasses/UpdateClasses";

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
            },
            {
                path:"payment",
                element:<Payment></Payment>
            }

        ]
    },

    {
        path:"dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
    },
    {
        path:"updateClass",
        element:<UpdateClasses></UpdateClasses>
    }
    
])

export default router;