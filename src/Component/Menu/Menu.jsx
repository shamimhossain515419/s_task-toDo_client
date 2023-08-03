import { NavLink } from 'react-router-dom'
const Menu = ({ setOpen }) => {
     return (
          <div className=' bg-[#FFF]  text-white'>
               <hr className=' my-2' />
               <div className=' space-y-4 flex   flex-col '>
                    <NavLink onClick={() => setOpen(true)} className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`}  > Home</NavLink>
                    <NavLink onClick={() => setOpen(true)} className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`}  > About</NavLink>
                    <NavLink onClick={() => setOpen(true)} className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`}  > Services</NavLink>
                    <NavLink onClick={() => setOpen(true)} className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`}  > My Portfolio</NavLink>
                    <NavLink onClick={() => setOpen(true)} className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`}  > contact</NavLink>
                    <div className=' justify-center items-center gap-4'>
                         <div className=' my-3 bg-[#E2EAF8] textColor  text-lg font-medium text-white  inline-block px-4 py-2 rounded-md '>
                              Login/Sing
                         </div>
                         <br />
                         <div className='my-3  bg-[#0058f0]   text-lg font-medium text-white px-4 py-2 inline-block rounded-md '>
                              Job  Post
                         </div>

                    </div>

               </div>
          </div>
     );
};

export default Menu;