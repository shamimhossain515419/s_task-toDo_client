
import { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import moment from 'moment';
const TaskDetails = ({ setDetails, updateId }) => {

     const [axiosSecure] = useAxiosSecure();
     const { data, isLoading } = useQuery({
          queryKey: ['task', updateId],
          queryFn: () => axiosSecure.get(`/taskSingle/${updateId}`)
     })

     const taskData = data?.data;
     if (!taskData) {
          return
     }
     const { title, description, date, name, email, status, time } = taskData;
     console.log(data);

     return (
          <>
               <div
                    className="justify-center items-center flex  m-2  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
               >
                    <div className="relative w-full my-6 mx-auto md:w-[600px]">
                         {/*content*/}
                         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header title*/}
                              <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                                   <h3 className="text-3xl font-semibold">
                                        Input Your To Do Details
                                   </h3>

                              </div>
                              {/*body Details*/}
                              <div className="relative p-6 flex-auto">
                                   <div>

                                        <form action="">

                                             <div className='inputFild relative '>
                                                  <div className=' '>
                                                       <input defaultValue={title} className=' p-3 w-full placeholder:text-xl   outline-none border border-[#2f2d2d]' type="text" name="title" placeholder='title' id="" />

                                                  </div>
                                                  <p> Input your title</p>
                                             </div>
                                             {/* nput your description  */}
                                             <div className='inputFild relative  mt-6'>
                                                  <div className=' '>
                                                       <textarea defaultValue={description} name="description" className=' p-3 w-full placeholder:text-xl   outline-none border border-[#2f2d2d]' id="" cols="30" rows="5" placeholder='type description'></textarea>

                                                  </div>
                                                  <p> Input your description</p>
                                             </div>
                                             {/* nput your Date  */}
                                        </form>

                                        {/* details  */}


                                        <div className=" flex justify-end items-end">
                                             <div>
                                                  <div className=" mt-2 flex items-center  justify-end  gap-5"> <p> status </p>
                                                       <span className={` border  ${status == "Complete" ? "border-[#1e90ee] px-4 rounded-md text-[#1e90ee]" : "border-[#f23e38] px-4 rounded-md text-[#f23e38]"} `}> {status} </span>
                                                  </div>
                                                  <div className=" flex mt-2 items-center  justify-end  gap-5">
                                                       <p> Add by </p> <span className=" border border-[#1e90ee] px-4 rounded-md text-[#1e90ee]"> {name} </span>
                                                  </div>
                                                  <div className=" mt-2 flex items-center  justify-end  gap-5">
                                                       <span className=" border border-[#1e90ee] px-4 rounded-md text-[#1e90ee]"> {email} </span>
                                                  </div>
                                                  <div className=" mt-2 flex items-center  justify-end  gap-5">
                                                       <p> added date -</p>
                                                       <span className=" border border-[#f23e38] px-4 rounded-md text-[#f23e38]"> {moment(time).format("dddd, MMMM  YYYY, h:mm:ss a")} </span>
                                                  </div>
                                                  <div className=" mt-2 flex items-center  justify-end  gap-5">
                                                       <p> Due Date -</p> <span className=" border border-[#f23e38] px-4 rounded-md text-[#f23e38]">  {moment(date).format("Do MMMM YYYY")} </span>
                                                  </div>
                                             </div>

                                        </div>

                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                             <button
                                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                  type="button"
                                                  onClick={() => setDetails(false)}
                                             >
                                                  Close
                                             </button>

                                        </div>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
     );
};

export default TaskDetails;