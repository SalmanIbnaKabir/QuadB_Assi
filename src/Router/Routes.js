import { createBrowserRouter } from "react-router-dom";
import Mains from "../Layout/Mains";
import Home from "../components/Navbar/Home";
import CardDetails from "../components/Navbar/CardDetails";

const router = createBrowserRouter([
  {
  path: '/',
  element: <Mains></Mains>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path:'/show/:id',
      element: <CardDetails></CardDetails>
    }
    
  ]
  }
])

export default router;