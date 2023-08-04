import { useContext, useState } from 'react';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { BsPenFill } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { AuthContact } from '../../../Component/AuthProvider/AuthProvider';
import img from '../../../../public/task.png'
const DashboardNavbar = () => {
     const { user } = useContext(AuthContact);
     return (
          <div className='  mt-32  p-4 '>

               <img src={img} className='  my-4 block mx-auto h-20 w-20 
                       ' alt="" />
                       <h1 className=' text-2xl   font-bold my-3 text-center '> S-task-Todo</h1>

               <hr />
               <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'mt-10   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <AiOutlineHome size={24}></AiOutlineHome>
                    <h2 className=' text-xl font-semibold'> Dashboard</h2>
               </NavLink>
               <NavLink to={'/dashboard/task'} className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <BsPenFill size={24}></BsPenFill>
                    <h2 className=' text-xl font-semibold'>my Task</h2>
               </NavLink>

               
               <div className='  '>
                    <div className=' mt-10 absolute bottom-0'>
                         <NavLink to={'/setting'} className='mt-2  flex gap-2 items-center'>
                               <AiOutlineSetting size={24}></AiOutlineSetting>
                               <h2 className=' text-xl font-semibold'> Setting</h2>
                         </NavLink>
                         <div  className=' mt-2   my-4 flex gap-2 items-center'>
                              <FiLogIn size={24}></FiLogIn>
                              <h2 className=' text-xl font-semibold'> Logout </h2>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DashboardNavbar;