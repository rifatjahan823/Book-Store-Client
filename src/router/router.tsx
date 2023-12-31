import{createBrowserRouter}from 'react-router-dom'
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children: [
        {
          index: true,
          element: <Home />,
        }, 
        {
          index: true,
          element:<PrivateRoute>
            
          </PrivateRoute>,
        }, 
      ],
    },
    {
      path: "/login",
      element:<Login/>,
    },
    {
      path: "/signup",
      element:<SignUp/>,
    },
 
  ]);