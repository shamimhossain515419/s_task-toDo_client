import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import Container from "../../Component/Container";
import { BiSolidEyedropper } from "react-icons/bi";
import { useState } from "react";
import { MdPanoramaFishEye } from "react-icons/md";
import { FaEdit, FaRegEyeSlash } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import AddList from "../TaskManegment/AddList/AddList";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import './TodoList.css'
import TaskEdit from "../TaskManegment/TaskEdit/TaskEdit";
const ToDoList = () => {

     const [ShowModal, setShowModal] = useState(false)
     const [showUpdate, setShowUpdate] = useState(false)
     const [axiosSecure] = useAxiosSecure();


     const { data, refetch, isLoading } = useQuery({
          queryKey: ['task'],
          queryFn: () => axiosSecure.get('http://localhost:5000/task')
     })
     const toDoData = data?.data





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

     return (
          <div className="  my-20 pt-10 ">
               <Container>
                    <div className=" w-full overflow-hidden">
                         {/* toDoListHeader  */}
                         <div className="   p-4 ">
                              <h1 className=" text-3xl font-semibold my-3 text-center "> ToDo List</h1>

                              <div className="   ">
                                   <div className=" w-full  md:flex md:justify-between items-center">

                                        <div className=" my-5 relative w-full md:w-[300px] ">
                                             <input className=" search p-3  relative w-full border border-[#222121] " type="text" placeholder="Search by title" name="" id="" />
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

                                        {toDoData &&
                                             toDoData?.map((item, index) => <tr key={index}>
                                                  <td>{index + 1}</td>
                                                  <td >

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
                                                  <td className="BgColor text-white rounded-md inline-block cursor-pointer"> <FaRegEyeSlash size={24} ></FaRegEyeSlash>  </td>
                                                  <td>
                                                     {
                                                        item?.status == "Pending" ? <> <p className="text-[#ee3b3b]"> {item?.status} </p> </> : <> <p className=" text-[#137528]"> {item?.status} </p> </>
                                                     }  
                                                        
                                                   </td>
                                                  <td> <div onClick={()=> setShowUpdate(true)} className=" bg-[#ea1ef4] text-white rounded-md  p-2  inline-block cursor-pointer" > <FaEdit size={24}></FaEdit></div></td>
                                                  <td onClick={() => handleDelete(item?._id)} className=" bg-red-500 text-white rounded-md inline-block cursor-pointer"><AiOutlineDelete size={24}></AiOutlineDelete></td>

                                             </tr>)
                                        }

                                   </tbody>
                              </table>
                         </div>

                    </div>








                    <div>


                         {
                              ShowModal ? (<AddList setShowModal={setShowModal}></AddList>) : null
                         }
                         {
                              showUpdate ? (<TaskEdit setShowUpdate={setShowUpdate}></TaskEdit>) : null
                         }

                           
                    </div>
               </Container>


               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />


          </div>
     );
};

export default ToDoList;