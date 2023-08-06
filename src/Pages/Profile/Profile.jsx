import { AuthContact } from "../../Component/AuthProvider/AuthProvider";
import { BiPen } from 'react-icons/bi'
import { useContext, useState } from 'react';
import { browserName, fullBrowserVersion, osName, osVersion, } from 'react-device-detect';
import Container from "../../Component/Container";
import AddContactInfo from "./AddContactInfo";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const Profile = () => {
     const { user } = useContext(AuthContact);
     const [contact, setContect] = useState(false);
     const [axiosSecure] = useAxiosSecure();
     const { data, refetch, isLoading } = useQuery({
          queryKey: ['user', user],
          queryFn: () => axiosSecure.get(`/user/${user?.email}`)
     })
     const userInfo = data?.data;

     return (
          <Container>
               <div className=" mt-28 ">

                    <div className="  grid md:grid-cols-2 gap-6 flex-col-reverse  ">
                         <div className=" md:order-2 md:p-5">


                              <div className="  text-center m my-6">
                                   <img className="  block mx-auto text-center md:w-[300px] md:h-[300px] h-[200px] w-[200px]  rounded-full border-2 border-blue-500 " src={user?.photoURL} alt="" />
                              </div>
                              <div>
                                   <h1 className=" uppercase textColor  text-2xl font-medium  text-center "> {user?.displayName} </h1>
                                   <h2 className="  text-base font-medium  text-center "> {user?.email} </h2>
                              </div>
                         </div>


                         <div className=" md:p-5 shadow-md p-4 border-2 border-r-2">

                              <div>

                                   <div>
                                        <div className=" my-2 flex justify-between items-center" >
                                             <h1 className=" text-2xl font-semibold "> Your Information </h1>
                                             <div onClick={() => setContect(true)} className=" cursor-pointer bg-[#1664ff] p-2 rounded-full text-white">
                                                  <BiPen size={28}></BiPen>
                                             </div>
                                        </div>
                                        <hr className="  border border-dashed " />
                                   </div>
                                   <div>
                                        <div className=" my-2 flex justify-between items-center" >
                                             <h1 className=" text-lg  font-normal"> Name </h1>
                                             <h1 className=" text-lg font-normal "> {user?.displayName} </h1>
                                        </div>
                                        <hr className="  border border-dashed " />
                                   </div>
                                   <div>
                                        <div className=" my-2 flex justify-between items-center" >
                                             <h1 className=" text-lg  font-normal"> Email </h1>
                                             <h1 className=" text-lg font-normal "> {user?.email} </h1>
                                        </div>
                                        <hr className="  border border-dashed " />
                                   </div>
                                   <div>
                                        <div className=" my-2 flex justify-between items-center" >
                                             <h1 className=" text-lg  font-normal"> Contact Number </h1>
                                             <h1 className=" text-lg font-normal "> {userInfo?.number ? userInfo?.number : "Not available"} </h1>
                                        </div>
                                        <hr className="  border border-dashed " />
                                   </div>
                                   <div>
                                        <div className=" my-2 flex justify-between items-center" >
                                             <h1 className=" text-lg  font-normal"> Address</h1>
                                             <h1 className=" text-lg font-normal "> {userInfo?.address ? userInfo?.address : "Not available"} </h1>
                                        </div>
                                        <hr className="  border border-dashed " />
                                   </div>
                                   <div>
                                        <div className=" my-2 flex justify-between items-center" >
                                             <h1 className=" text-lg  font-normal"> Used Browser</h1>
                                             <h1 className=" text-lg font-normal "> {browserName} {fullBrowserVersion} </h1>
                                        </div>
                                        <hr className="  border border-dashed " />
                                   </div>
                                   <div>
                                        <div className=" my-2 flex justify-between items-center" >
                                             <h1 className=" text-lg  font-normal"> Used Dives</h1>
                                             <h1 className=" text-lg font-normal "> {osName} {osVersion} </h1>
                                        </div>
                                        <hr className="  border border-dashed " />
                                   </div>
                              </div>

                              <div >
                                   <h1 className=" text-xl text-center    font-medium my-5 "> Social Links</h1>

                                   <div>
                                        {
                                             userInfo?.linkedin || userInfo?.facebook ?

                                                  <div>
                                                       <h1 className=" text-xl font-bold"> linkedin:   <a className=" text-blue-400 font-normal" href={userInfo?.linkedin}>https://linkedin.com</a> </h1>
                                                       <h1 className=" text-xl font-bold"> facebook:   <a className=" text-blue-400 font-normal" href={userInfo?.facebook}>https://facebook.com</a> </h1>
                                                       
                                                  </div> : <p>Not available</p>
                                        }

                                   </div>

                                  
                              </div>

                         </div>
                    </div>

                    {
                         contact ? <AddContactInfo refetch={refetch} setContect={setContect}></AddContactInfo> : null
                    }
               </div>
          </Container>
     );
};

export default Profile;