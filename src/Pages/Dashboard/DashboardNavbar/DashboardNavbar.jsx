import { useContext, useState } from 'react';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { BsPenFill } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContact } from '../../../Component/AuthProvider/AuthProvider';
import img from '../../../../public/task.png'
import toast from 'react-hot-toast';
import { FaTasks } from 'react-icons/fa';
const DashboardNavbar = () => {
     const { user, LogOut } = useContext(AuthContact);
     const navigate = useNavigate()
     const handleLogout = () => {
          LogOut().then(result => {
               toast.success("Successfully Update")
               navigate('/');

          })
     }
     return (
          <div className='  mt-32  p-4 '>

               <img src={img} className='  my-4 block mx-auto h-20 w-20 
                       ' alt="" />
               <h1 className=' text-2xl   font-bold my-3 text-center '> S-task-Todo</h1>

               <hr />
               <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'mt-10   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <AiOutlineHome size={22}></AiOutlineHome>
                    <h2 className=' text-xl font-semibold'> Dashboard</h2>
               </NavLink>
               <NavLink to={'/dashboard/task'} className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <BsPenFill size={22}></BsPenFill>
                    <h2 className=' text-xl font-semibold'>My Task</h2>
               </NavLink>
               <NavLink to={'/dashboard/to-do-task'} className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <FaTasks size={22} />
                    <h2 className=' text-xl font-semibold'>ToDo Task</h2>
               </NavLink>


               <div className='  '>
                    <div className=' mt-10 absolute bottom-0'>

                         <div onClick={handleLogout} className=' cursor-pointer mt-2 rounded-md w-full   border border-blue-500 px-10 py-2   my-4 flex gap-2 items-center'>
                              <FiLogIn size={24}></FiLogIn>
                              <h2 className=' text-xl font-semibold'> Logout </h2>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DashboardNavbar;