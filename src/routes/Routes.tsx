import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import JobsPage from "../pages/JobsPage";
import Jobpage from "../pages/Jobpage";
import AddJob from "../pages/AddJob";
import jobLoader from "../hooks/useJobLoader"


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index:true,
                element:<Homepage/>,
            },
            {path:'jobs',element:<JobsPage/>},
            {path:'about-us',element:<AboutUs/>},
            {path:'jobs/:id',element:<Jobpage/>,loader:jobLoader},
            {path:'/add-job',element:<AddJob />},
            
        ],
    },
    {path:'*',element:<NotFound/>},
]);

export default router 