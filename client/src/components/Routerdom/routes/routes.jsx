import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Home/Home";
import SingleDetails from "../../pages/SingleDetails/SingleDetails";
import Checkout from "../../pages/Checkout/Checkout";
import Addservice from "../../pages/Addservice/Addservice";
import Errorpage from "../Errorpage/Errorpage";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register"
import Private from "../../Authentication/Private/Private";
import Ordereview from "../../pages/Ordereview/Ordereview";
import Service from "../../pages/Service/Service";




const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:'/service/:id',
                element:<SingleDetails></SingleDetails>
            },{
                path:'/checkout/:id',
                element:<Private><Checkout></Checkout></Private>
            },{
                path:'/addservice',
                element:<Addservice></Addservice>
            },{
                path:'/ordereview',
                element:<Private><Ordereview></Ordereview></Private>
            },{
                path:'/service',
                element:<Service></Service>
            }
        ]
    },{
        path:'/login',
        element:<Login></Login>
    },{
        path:'/register',
        element:<Register></Register>
    }
])
export default routes;