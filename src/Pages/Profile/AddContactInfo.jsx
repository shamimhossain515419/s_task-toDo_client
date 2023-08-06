import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContact } from '../../Component/AuthProvider/AuthProvider';


const AddContactInfo = ({ refetch, setContect }) => {
     const { user } = useContext(AuthContact);
     const [date, setData] = useState('');
     const [axiosSecure] = useAxiosSecure();
     const handleSubmit = (e) => {
          e.preventDefault();
          const from = e.target;
          const facebook = from.facebook.value;
          const linkedin = from.linkedin.value;
          const number = from.number.value;
          const address = from.address.value;
          const UserData = { name: user?.displayName, email: user?.email, facebook, linkedin, number, address };
          axiosSecure.post('/user', UserData).then(result => {
               if (result) {
                    setContect(false);

                    refetch();
                    toast.success(" Successfully Update profile")
               }
          }).catch(error => {
               toast.error(`${error.massage}`)
          })

     }
     return (
          <>
               <div
                    className="justify-center items-center flex  m-2  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
               >
                    <div className="relative w-full my-6 mx-auto md:w-[700px]">
                         {/*content*/}
                         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header title*/}
                              <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                                   <h3 className="text-3xl font-semibold">
                                        Input Your Contact Info
                                   </h3>

                              </div>
                              {/*body Details*/}
                              <div className="relative p-6 flex-auto">
                                   <div>

                                        <form onSubmit={handleSubmit} action="">
                                             {/* displayName  */}
                                             <div className='inputFild relative '>
                                                  <div className=' '>
                                                       <input value={user?.displayName} className=' p-3 w-full placeholder:text-xl   outline-none border border-[#2f2d2d]' type="text" name="name" placeholder='title' id="" />

                                                  </div>
                                                  <p> Name</p>
                                             </div>
                                             {/* nput your email  */}
                                             <div className=' md:flex justify-between items-center gap-6'>
                                                  <div className='inputFild  md:w-1/2 mt-8 relative '>
                                                       <div className=' '>
                                                            <input value={user?.email} className=' p-3 w-full placeholder:text-xl   outline-none border border-[#2f2d2d]' type="email" name="email" placeholder='email' id="" />

                                                       </div>
                                                       <p>  email</p>
                                                  </div>
                                                  {/* nput your Number  */}
                                                  <div className='inputFild mt-8  md:w-1/2  relative '>
                                                       <div className=' '>
                                                            <input className=' p-3 w-full placeholder:text-base placeholder:text-black   outline-none border border-[#2f2d2d]' type="number" name="number" placeholder='number' id="" />

                                                       </div>
                                                       <p>Contact Number</p>
                                                  </div>
                                             </div>

                                             {/* nput your Address  */}
                                             <div className='inputFild mt-8    relative '>
                                                  <div className=' '>
                                                       <input className=' p-3 w-full placeholder:text-base placeholder:text-blac   outline-none border border-[#2f2d2d]' type="text" name="address" placeholder='Address' id="" />

                                                  </div>
                                                  <p> Address</p>
                                             </div>

                                             {/* nput your Date  */}
                                             <div className='inputFild relative  mt-6'>
                                                  <div className=' '>

                                                       <input className=' p-3 w-full placeholder:text-xl   outline-none border border-[#2f2d2d]' type="linkedin" name="linkedin" placeholder='linkedin' id="" />

                                                  </div>
                                                  <div className=' '>

                                                       <input className=' p-3 w-full placeholder:text-xl   outline-none border border-[#2f2d2d]' type="facebook" name="facebook" placeholder='facebook' id="" />

                                                  </div>
                                                  <p> Social Media Links</p>
                                             </div>


                                             <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                  <button
                                                       className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                       type="button"
                                                       onClick={() => setContect(false)}
                                                  >
                                                       Close
                                                  </button>
                                                  <button
                                                       className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                       type="submit"

                                                  >
                                                       Update
                                                  </button>
                                             </div>

                                        </form>

                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
     );
};

export default AddContactInfo;