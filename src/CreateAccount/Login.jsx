import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContact } from '../Component/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast'
const Login = () => {
     const { Login, GoogelSing } = useContext(AuthContact)
     const navigate = useNavigate();
     const handleLogin = (e) => {
          e.preventDefault();
          const from = e.target;
          const email = from.email.value;
          const password = from.password.value;

          Login(email, password).then(result => {
               if (result) {
                    navigate('/')
                    toast.success('Successfully Register!')
               }
          }).catch(error => {

               toast.error(`${error.massage}`)
          })

     }

     const handleGooglesing = () => {
          GoogelSing().then(result => {
                navigate('/')
               toast.success('Successfully google login!')
          }).catch(error => {
               toast.error(`${error.massage}`)
          })
     }

     return (
          <div>
               <div className='  w-full '>
                    {/* Login  part  */}
                    <div className='Modal  w-full    relative  z-50 min-w-[240px] max-w-[700px] lg:min-w-[700px] shadow mx-auto  md:p-6  rounded bg-white   '>

                    
                         <div>
                              <div className='   my-2 flex items-center justify-center '>
                                   <h1 className=' text-2xl font-semibold my-4'> S-task-todo</h1>

                              </div>
                              <div className=' px-4  md:px-10'>
                                   <form onSubmit={handleLogin} action="">

                                        <div className=' w-full  my-6'>
                                             <label className='  my-3' htmlFor="User Nma"> Username</label>
                                             <input type="email" className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   hover:outline-[#258ff1]  px-2 py-3 ' name="email" id="" />

                                        </div>
                                        <div className=' w-full my-6'>
                                             <label className='  my-3' htmlFor="password"> Password</label>
                                             <input type="password" className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   hover:outline-[#258ff1]  px-2 py-3 ' name="password" id="" />

                                        </div>

                                        <div className=' flex justify-between items-center gap-3 flex-wrap'>
                                             <p>Show password</p>
                                             <Link> forget password</Link>
                                        </div>
                                        <div className=' mt-8'>
                                             <button type='submit' className='BgColor text-white  text-center mx-auto text-2xl font-normal py-2 w-full block  rounded-lg'>Login</button>
                                        </div>
                                   </form>

                                   <div>
                                        <div className=' text-center mx-auto mt-3'>Don't have an account? <Link to={'/register'} className=' textColor'>Singup</Link></div>
                                   </div>

                                   <div className=' my-8 flex w-full  justify-center items-center gap-3'>
                                        <div onClick={handleGooglesing} className=' cursor-pointer w-1/2 border py-2 rounded-md text-center  border-[#226ce3] '>
                                             <FcGoogle className=' mx-auto' size={32}></FcGoogle>
                                        </div>
                                        <div className='cursor-pointer border w-1/2  py-2  rounded-md text-center  border-[#226ce3] '>
                                             <BiLogoFacebookCircle className=' text-blue-500 mx-auto' size={32}></BiLogoFacebookCircle>
                                        </div>
                                   </div>
                              </div>
                         </div>


                    </div>
               </div>
               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />
          </div>
     );
};

export default Login;