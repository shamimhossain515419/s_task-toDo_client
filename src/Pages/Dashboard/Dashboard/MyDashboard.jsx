import { AuthContact } from "../../../Component/AuthProvider/AuthProvider";
import { useContext } from 'react'

const MyDashboard = () => {
     const { user } = useContext(AuthContact)
     return (
          <div className="flex justify-center items-center w-full h-screen ">
               <div>
                     <div className=" text-center">
                         <h1 className=" text-3xl font-medium my-1 text-center "> Welcome To Dashboard, <span className=" text-[#ec1cc6]"> {user?.displayName}  </span> </h1>
                     </div>

                     <div className=" my-10 text-center mx-auto">
                          <img className=" rounded-full mx-auto  object-cover  my-20 border border-blue-500 md:h-[200px] md:w-[200px]" src={user?.photoURL} alt="" />
                    </div>

               </div>
          </div>
     );
};

export default MyDashboard;