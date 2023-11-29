import { createBrowserRouter } from 'react-router-dom'
import Main from '../Main/Main';
import Home from '../Pages/Home/Home/Home';
import Register from '../CreateAccount/Register';
import Login from '../CreateAccount/Login';
import ToDoList from '../Pages/ToDoList/ToDolist';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import MyDashboard from '../Pages/Dashboard/Dashboard/MyDashboard';
import ErrorPage from '../share/ErrorPage/ErrorPage';
import ManageTodo from '../Pages/manageTodo/manageTodo';
import PrivateRoute from './PrivateRoute';
import Profile from '../Pages/Profile/Profile';


const Route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/todoList',
                    element: <PrivateRoute> <ToDoList></ToDoList> </PrivateRoute>
               },
               {
                    path: '/profile',
                    element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
               }
          ]

     },
     {
          path: '/register',
          element: <Register></Register>
     },
     {
          path: '/dashboard',
          element: <PrivateRoute> <Dashboard></Dashboard>,</PrivateRoute>,
          children: [
               {
                    path: '/dashboard',
                    element: <PrivateRoute> <Profile></Profile></PrivateRoute>
               },
               {
                    path: '/dashboard/task',
                    element: <PrivateRoute> <ManageTodo></ManageTodo></PrivateRoute>
               },
               {
                    path: '/dashboard/to-do-task',
                    element: <PrivateRoute><ToDoList></ToDoList></PrivateRoute>
               }
          ]
     },

     {
          path: '/login',
          element: <Login></Login>
     }


])

export default Route;