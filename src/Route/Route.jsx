import { createBrowserRouter } from 'react-router-dom'
import Main from '../Main/Main';
import Home from '../Pages/Home/Home/Home';
import Register from '../CreateAccount/Register';
import Login from '../CreateAccount/Login';
import ToDoList from '../Pages/ToDoList/ToDolist';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import MyDashboard from '../Pages/Dashboard/Dashboard/MyDashboard';
import ErrorPage from '../share/ErrorPage/ErrorPage';

const Route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          errorElement:<ErrorPage></ErrorPage>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/todoList',
                    element: <ToDoList></ToDoList>
               }
          ]

     },
     {
          path: '/register',
          element: <Register></Register>
     },
     {
          path: '/dashboard',
          element: <Dashboard></Dashboard>,
          children:[
               {
                     path:'/dashboard',
                     element:<MyDashboard></MyDashboard>
               }
          ]
     },

     {
          path: '/login',
          element: <Login></Login>
     }

])

export default Route;