import { AiOutlineHome } from 'react-icons/ai';
import { FaRegEyeSlash } from 'react-icons/fa';

import { NavLink } from 'react-router-dom'
const Menu = ({ setOpen }) => {
     return (
          <div className='  '>
               <hr className=' my-2' />
               <div className=' space-y-4 flex   flex-col '>
                    <NavLink onClick={() => setOpen(true)} className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`}  > Home</NavLink>

                    <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'mt-10   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                         <AiOutlineHome size={24}></AiOutlineHome>
                         <h2 className=' text-xl font-semibold'> Dashboard</h2>
                    </NavLink>
                    <NavLink to={'/dashboard/task'} className={({ isActive }) => isActive ? 'mt-2   my-4 flex gap-2 items-center text-blue-500' : 'mt-2   my-4 flex gap-2 items-center'}>
                         <FaRegEyeSlash size={24}></FaRegEyeSlash>
                         <h2 className=' text-xl font-semibold'> task</h2>
                    </NavLink>

                    <div className=' justify-center items-center gap-4'>
                         <div className=' my-3 bg-[#E2EAF8] textColor  text-lg font-medium text-white  inline-block px-4 py-2 rounded-md '>
                              Login/Sing
                         </div>
                         <br />


                    </div>

               </div>
          </div>
     );
};

export default Menu;