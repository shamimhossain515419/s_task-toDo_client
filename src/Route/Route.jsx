import {createBrowserRouter} from 'react-router-dom'
import Main from '../Main/Main';
import Home from '../Pages/Home/Home/Home';
import Register from '../CreateAccount/Register';
import Login from '../CreateAccount/Login';

const Route = createBrowserRouter([
     {
           path:'/',
           element:<Main></Main>,
           children:[
                {
                    path:'/',
                    element:<Home></Home>
                }
           ]

     },
     {
          path:'/register',
          element:<Register></Register>
     },
     {
          path:'/login',
          element:<Login></Login>
     }
    
])

export default Route;