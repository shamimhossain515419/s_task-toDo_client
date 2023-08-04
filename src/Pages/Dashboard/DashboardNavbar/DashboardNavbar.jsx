import { useContext, useState } from 'react';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { MdRoundaboutRight } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { AuthContact } from '../../../Component/AuthProvider/AuthProvider';
const DashboardNavbar = () => {
     const { user } = useContext(AuthContact);
     return (
          <div className=' textColor mt-32  '>

               <img src={user?.photoURL} className='  my-4 block mx-auto h-24 w-24 rounded-full
                     border-2 border-blue-500 ' alt="" />

               <hr />
               <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'mt-10   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <AiOutlineHome size={24}></AiOutlineHome>
                    <h2 className=' text-xl font-semibold'> Dashboard</h2>
               </NavLink>
               <NavLink to={'/dashboard/task'} className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                    <MdRoundaboutRight size={24}></MdRoundaboutRight>
                    <h2 className=' text-xl font-semibold'> task</h2>
               </NavLink>

               <hr className=' mt-5' />
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