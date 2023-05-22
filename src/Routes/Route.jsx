import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import AllToys from "../page/AllToys/AllToys";
import AddToy from "../page/AddToy/AddToy";
import ToyDetails from "../page/ToyDetails/ToyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/alltoys',
          element: <AllToys></AllToys>,
          // loader: ()=> fetch('http://localhost:5000/toys')
          
        },
        {
          path:'/addToy',
          element: <AddToy></AddToy>
        },
        {
          path:'/singleToy/:id',
          element: <ToyDetails></ToyDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/singleToy/${params.id}`)

        },
        
      ]
    },
  ]);


  export default router;

