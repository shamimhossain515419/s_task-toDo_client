
import { MdModeEditOutline } from 'react-icons/md';
import './addList.css'
import { useContext, useState } from 'react';
import { AuthContact } from '../../../Component/AuthProvider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast'
import TaskApi from '../../../Api/Taskapi';
const AddList = ({ setShowModal }) => {
     const { user } = useContext(AuthContact);
     const [date, setData] = useState('');
     const [axiosSecure] = useAxiosSecure();
     const [refetch] = TaskApi()

     const handleSubmit = (e) => {
          e.preventDefault();
          const from = e.target;
          const title = from.title.value;
          const description = from.description.value;
          const TaskData = { title, description, date, name: user?.displayName, email: user?.email, status: 'pending', time: new Date() };
          console.log(TaskData);

          axiosSecure.post('/task', TaskData).then(result => {
               console.log(result);
               if (result) {
                    setShowModal(false)
                    refetch();
                    toast.success('Successfully Task add!')
               }
          }).catch(error => {
               console.log(error?.massage);
               toast.error(`${error?.massage}`)
          })



     }
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

                                        <form onSubmit={handleSubmit} action="">

                                             <div className='inputFild relative '>
                                                  <div className=' '>
                                                       <input className=' p-3 w-full placeholder:text-xl   outline-none border border-[#2f2d2d]' type="text" name="title" placeholder='title' id="" />

                                                  </div>
                                                  <p> Input your title</p>
                                             </div>
                                             {/* nput your description  */}
                                             <div className='inputFild relative  mt-6'>
                                                  <div className=' '>
                                                       <textarea name="description" className=' p-3 w-full placeholder:text-xl   outline-none border border-[#2f2d2d]' id="" cols="30" rows="5" placeholder='type description'></textarea>

                                                  </div>
                                                  <p> Input your description</p>
                                             </div>
                                             {/* nput your Date  */}
                                             <div className='inputFild relative  mt-6'>
                                                  <div className=' '>

                                                       <input onChange={(e) => setData(e.target.value)} className=' p-3 w-full placeholder:text-xl   outline-none border border-[#2f2d2d]' type="date" name="date" placeholder='date' id="" />

                                                  </div>
                                                  <p> Input your Date</p>
                                             </div>


                                             <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                  <button
                                                       className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                       type="button"
                                                       onClick={() => setShowModal(false)}
                                                  >
                                                       Close
                                                  </button>
                                                  <button
                                                       className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                       type="submit"

                                                  >
                                                       Add List
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

export default AddList;