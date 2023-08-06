import { useContext } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { AuthContact } from "../../Component/AuthProvider/AuthProvider";
import { SiTask } from 'react-icons/si';
import { AiOutlineLogin } from 'react-icons/ai';
import { toast } from 'react-hot-toast'
import { BiSolidDashboard } from "react-icons/bi";
const ProfileModal = ({ setShowModal }) => {
     const { user, LogOut, loading } = useContext(AuthContact);
     const navigate = useNavigate();
     const handleLogout = () => {
          LogOut().then((result) => {
               if (result) {
                    setShowModal(false);
                    navigate()
                    setShowModal(false);
                    toast.success(" Successfully Logout")
               }

          }).catch((err) => {
               toast.error(" Successfully Logout")
          });
     }
     return (
          <div>
               <div className='  fixed top-20    shadow-lg right-4 md:right-16  bg-[#fff] z-50 p-4 rounded-lg'>

                    <div className=' text-center '>
                         <img className=' mx-auto h-28 w-28 rounded-full border border-blue-400' src={user?.photoURL} alt="" />
                         <h1 className=' text-2xl font-normal my-1  uppercase'> {user?.displayName} </h1>
                         <p> UseId:   {user?.uid.slice(0, 10)} </p>
                         <div onClick={()=>setShowModal(false)} className='my-4'>
                              <Link to={'/profile'} className=' text-xl font-normal BgColor   px-8 py-2 text-white rounded-xl'> View Profile </Link>
                         </div>
                    </div>
                    <hr />
                    <div className=' my-1'>
                         <Link onClick={()=>setShowModal(false)} to={'/dashboard'} className=' flex gap-1 items-center  my-4 hover:translate-x-2 hover:bg-[#E8E9EB] px-4 rounded-lg py-2 duration-300'>  <BiSolidDashboard size={20}></BiSolidDashboard>  <span> Dashboard</span></Link>
                         <Link onClick={()=>setShowModal(false)}  to={'/dashboard/task'} className=' flex gap-1 items-center  my-4 hover:translate-x-2 hover:bg-[#E8E9EB]  px-4 rounded-lg py-2 duration-300'>  <SiTask size={20}></SiTask>  <span> Your Task</span></Link>
                         <div onClick={handleLogout} className=' flex gap-1 items-center  my-4 hover:translate-x-2 hover:bg-[#E8E9EB] px-4 rounded-lg py-2  duration-300'>  <AiOutlineLogin size={20}></AiOutlineLogin>  <span> Logout</span></div>

                    </div>

               </div>


          </div>
     );
};

export default ProfileModal;