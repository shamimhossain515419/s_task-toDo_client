import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import Container from "../../Component/Container";
import { BiSolidEyedropper } from "react-icons/bi";
import { useState, useContext } from "react";
import { MdPanoramaFishEye } from "react-icons/md";
import { FaEdit, FaRegEyeSlash } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import AddList from "../TaskManegment/AddList/AddList";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import './TodoList.css'
import TaskEdit from "../TaskManegment/TaskEdit/TaskEdit";
import TaskApi from "../../Api/Taskapi";
import { AuthContact } from "../../Component/AuthProvider/AuthProvider";
import TaskDetails from "../TaskManegment/taskDetails/TaskDetails";
import { Dna } from "react-loader-spinner";
const ToDoList = () => {
     const [toDoData, refetch, isLoading] = TaskApi();
     const [ShowModal, setShowModal] = useState(false)
     const [showUpdate, setShowUpdate] = useState(false)
     const [Details, setDetails] = useState(false)
     const [updateId, setupdateId] = useState("")
     const [axiosSecure] = useAxiosSecure();
     const [searchData, setSearchData] = useState('')
     const [todoTask, setTodoTask] = useState(toDoData);
     const { user } = useContext(AuthContact)

   

     const handleOnchange = (e) => {
          const value = e.target.value;
          setSearchData(value);
          const filtered = toDoData?.filter((item) =>
               item.title.toLowerCase().includes(value.toLowerCase())
          );
          setTodoTask(filtered);
     }
     const handleDelete = (id) => {
          console.log(id);
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {

                    axiosSecure.delete(`/task/${id}`).then(result => {
                         if (result) {
                              refetch()
                              Swal.fire(
                                   'Deleted!',
                                   'Your file has been deleted.',
                                   'success'
                              )
                         }
                    }).catch(error => {
                         console.log(error);
                    })


               }
          })
     }

     // const handleUpdate = (id) => {

     const handleUpdate = (id) => {
          axiosSecure.patch(`/task/${id}`).then(result => {
               console.log(result);
               if (result) {
                    refetch()
                    toast.success('Successfully Task add!')
               }
          }).catch(error => {
               console.log(error?.massage);
               toast.error(`${error?.massage}`)
          })
     }

     return (
          <div className="  my-20 pt-10 ">
               <Container>
                    <div className=" w-full overflow-hidden">
                         <h1 className=" text-3xl font-semibold my-3 text-center "> ToDo List</h1>
                         <p className=" text-center text-lg  font-medium "> Here you will get all your ToDo list. </p>

                         {
                              isLoading ? <div className=" flex mt-10 justify-center bg-white z-40 w-full items-baseline h-screen">

                                   <div>
                                        <Dna
                                             visible={true}
                                             height="80"
                                             width="80"
                                             ariaLabel="dna-loading"
                                             wrapperStyle={{}}
                                             wrapperClass="dna-wrapper"
                                        />
                                   </div>
                              </div> : <>  {
                                   toDoData && toDoData.length > 0 ? <> {/* toDoListHeader  */}
                                        <div className="   p-4 ">

                                             <div className="   ">
                                                  <div className=" w-full  md:flex md:justify-between items-center">

                                                       <div className=" my-5 relative w-full md:w-[300px] ">
                                                            <input onChange={handleOnchange} value={searchData} className=" search p-3  relative w-full border border-[#222121] " type="text" placeholder="Search by title" name="" id="" />
                                                            <div className=" absolute right-0 top-0   h-full  flex justify-center items-center px-4 cursor-pointer text-white bg-[#080808]">
                                                                 <AiOutlineSearch size={28}></AiOutlineSearch>
                                                            </div>

                                                       </div>
                                                       <div onClick={() => setShowModal(true)} className=" cursor-pointer">
                                                            <div className=" addTodoCard flex justify-center items-center">
                                                                 <BiSolidEyedropper size={24}></BiSolidEyedropper>
                                                                 <span> Add new ToDOs</span>
                                                            </div>
                                                       </div>
                                                  </div>

                                             </div>
                                        </div>


                                        {/* thead Todo List  */}
                                        <div className=" my-10 overflow-x-scroll md:overflow-hidden">

                                             <table className="styled-table">
                                                  <thead>
                                                       <tr>
                                                            <th>SI</th>
                                                            <th>Complete</th>
                                                            <th>Title</th>
                                                            <th>Description</th>
                                                            <th>Details</th>
                                                            <th>Status</th>
                                                            <th>Edit</th>
                                                            <th>Delete</th>
                                                       </tr>
                                                  </thead>
                                                  <tbody>
                                                       {/* toDoData  */}
                                                       {toDoData &&
                                                            toDoData?.map((item, index) => <tr key={index}>
                                                                 <td>{index + 1}</td>
                                                                 <td onClick={() => handleUpdate(item?._id)}>

                                                                      {
                                                                           item?.status == "Pending" ? <> <div className=" cursor-pointer text-[#fa06dd]">
                                                                                <MdPanoramaFishEye size={24}></MdPanoramaFishEye>
                                                                           </div>  </> : <><div className=" cursor-none text-[#2d74de]">
                                                                                <BsCheckCircle size={24}></BsCheckCircle>
                                                                           </div></>
                                                                      }
                                                                 </td>
                                                                 <td>{item?.title}</td>
                                                                 <td>{item?.description.slice(0, 15)}...</td>
                                                                 <td onClick={() => setDetails(true)} className="BgColor text-white rounded-md inline-block cursor-pointer"> <FaRegEyeSlash onClick={() => setupdateId(item._id)} size={24} ></FaRegEyeSlash>  </td>
                                                                 <td>
                                                                      {
                                                                           item?.status == "Pending" ? <> <p className="text-[#ee3b3b]"> {item?.status} </p> </> : <> <p className=" text-[#137528]"> {item?.status} </p> </>
                                                                      }

                                                                 </td>
                                                                 <td onClick={() => setupdateId(item._id)}> <div onClick={() => setShowUpdate(true)} className=" bg-[#ea1ef4] text-white rounded-md  p-2  inline-block cursor-pointer" > <FaEdit size={24}></FaEdit></div></td>
                                                                 <td onClick={() => handleDelete(item?._id)} className=" bg-red-500 text-white rounded-md inline-block cursor-pointer"><AiOutlineDelete size={24}></AiOutlineDelete></td>

                                                            </tr>)
                                                       }

                                                  </tbody>
                                             </table>
                                        </div></> :
                                        <><div>

                                             <div className=" text-center mx-auto max-w-[400px] my-24 ">
                                                  <div className=" inline-block  bg-[#ee9c29] text-lg font px-10 py-2  rounded-md text-white"> You don't have any todoS in your list </div>
                                                  <div onClick={() => setShowModal(true)} className="  mt-9 inline-block  cursor-pointer">
                                                       <div className=" addTodoCard flex justify-center items-center">
                                                            <BiSolidEyedropper size={24}></BiSolidEyedropper>
                                                            <span> Add new ToDOs</span>
                                                       </div>
                                                  </div>

                                             </div>
                                        </div>
                                        </>
                              }
                              </>

                         }



                    </div>
                    <div>

                         {/* all Modal  */}
                         {
                              ShowModal ? (<AddList refetch={refetch} setShowModal={setShowModal}></AddList>) : null
                         }
                         {
                              showUpdate ? (<TaskEdit updateId={updateId} setShowUpdate={setShowUpdate}></TaskEdit>) : null
                         }
                         {
                              Details ? (<TaskDetails updateId={updateId} setDetails={setDetails}></TaskDetails>) : null
                         }


                    </div>
               </Container>

               {/* Toaster  */}
               <Toaster position="top-center" reverseOrder={false} />


          </div>
     );
};

export default ToDoList;