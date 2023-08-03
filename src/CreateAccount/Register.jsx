
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { TbAccessPoint } from 'react-icons/tb';

import { Link } from 'react-router-dom';
import  toast,{ Toaster } from 'react-hot-toast'
import { AuthContact } from '../Component/AuthProvider/AuthProvider';
import { useState, useContext } from 'react';
const Register = () => {
     const [imgeLoading, setImageLoading] = useState(false);
     const [image, setImage] = useState("");
     const { CreateUser ,updateProfilePhoto} = useContext(AuthContact)

     const handleSubmit = (e) => {
          e.preventDefault();
          const from = e.target;
          const name = from.name.value;
          const email = from.email.value;
          const password = from.password.value;
          const userData = { name, email, password };
          console.log(userData);

          CreateUser(email, password).then(result => {
               console.log(result);
               toast.success('Successfully Register!')

               updateProfilePhoto(name, image).then(result => {
                    console.log(result);
                    if (result) {
                         toast.success('Successfully Register!')
                    }
               }).catch(error => {
                    console.log(error);
               })
          }).catch(error => {
               console.log(error.massage);
               toast.error(`${error.massage}`)
          })

     }

     const handleChange = (event) => {
          const selectedImage = event.target.files[0];
          setImageLoading(true)
          const Imagebb_URL = `https://api.imgbb.com/1/upload?key=a51250151cc877a01d697ac0a493b3bd`
          const formData = new FormData();
          formData.append('image', selectedImage);
          fetch(Imagebb_URL, {
               method: "POST",
               body: formData
          }).then(res => res.json()).then(data => {
               if (data?.data?.display_url) {
                    setImage(data?.data?.display_url)
                    setImageLoading(false)
               }
          })
     }

     return (
          <div className=" flex justify-center items-center  min-h-[100vh]">

               <div >
                    <div className=' md:w-[600px]'>
                         <div className='   my-2 flex items-center justify-center '>
                              <h1 className=' text-2xl font-semibold my-4 underline textColor'> Register New</h1>

                         </div>
                         <div className=' px-4  md:px-10'>

                              <form onSubmit={handleSubmit} action="">

                                   <div className=' w-full  my-6'>
                                        <label className='  my-3' htmlFor="User Nma"> name</label>
                                        <input type="text" className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   hover:outline-[#258ff1]  px-2 py-3 ' name="name" id="" />

                                   </div>
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

                                   </div>
                                   <div className=' mt-3'>

                                        {
                                             image ? <h1 className=' text-xl text-blue-500'> Success Upload</h1> : <label htmlFor="image">
                                                  <input onChange={handleChange} type="file" name="image" id="image" className='  hidden' />
                                                  {
                                                       imgeLoading ? <TbAccessPoint size={32} className=' textColor  animate-spin '></TbAccessPoint> : <HiOutlinePhotograph size={32} className=' textColor '></HiOutlinePhotograph>
                                                  }

                                             </label>

                                        }

                                   </div>
                                   <div className=' mt-8'>
                                        <button type='submit' className='BgColor text-white  text-center mx-auto text-2xl font-normal py-2 w-full block  rounded-lg'>Register</button>
                                   </div>
                              </form>


                              <div>
                                   <div className=' text-center mx-auto mt-3'>Don't have an account? <Link to={'/login'} className=' textColor'>Login</Link></div>
                              </div>

                              <div className=' my-8 flex w-full  justify-center items-center gap-3'>
                                   <div className=' cursor-pointer w-1/2 border py-2 rounded-md text-center  border-[#226ce3] '>
                                        <FcGoogle className=' mx-auto' size={32}></FcGoogle>
                                   </div>
                                   <div className='cursor-pointer border w-1/2  py-2  rounded-md text-center  border-[#226ce3] '>
                                        <BiLogoFacebookCircle className=' text-blue-500 mx-auto' size={32}></BiLogoFacebookCircle>
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

export default Register;