import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import Container from "../../Component/Container";
import { BiSolidEyedropper } from "react-icons/bi";
import { useEffect, useState } from "react";
import { MdPanoramaFishEye } from "react-icons/md";
import { FaEdit, FaRegEyeSlash } from "react-icons/fa";
import './TodoList.css'
const ToDoList = () => {
     const [toDoData, setTodoData] = useState([])

     useEffect(() => {
          fetch('todolist.json').then(res => res.json()).then(data => setTodoData(data));

     }, [])

     console.log(toDoData);
     return (
          <div className="  my-20 pt-10">
               <Container>
                    {/* toDoListHeader  */}
                    <div className="  toDoListHeader p-4 ">
                         <h1 className=" text-3xl font-semibold my-3 text-center "> ToDo List</h1>

                         <div className=" mt-10 sm:flex-1 flex-col sm:flex-row w-full md:flex md:justify-between items-center">

                              <div className=" my-5 relative w-[220px] md:w-[300px] ">
                                   <input className=" search p-3  relative w-full border border-[#222121] " type="text" placeholder="Search by title" name="" id="" />
                                   <div className=" absolute right-0 top-0   h-full  flex justify-center items-center px-4 cursor-pointer text-white bg-[#080808]">
                                        <AiOutlineSearch size={28}></AiOutlineSearch>
                                   </div>

                              </div>
                              <div className="addNewToDo my-5">
                                   <BiSolidEyedropper size={27}></BiSolidEyedropper>
                                   <p > add new todos  </p>
                              </div>
                         </div>

                    </div>


                    {/* thead Todo List  */}
                    <div className=" my-10">




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

                                   {
                                        toDoData.map((item, index) => <tr key={index}>
                                             <td>{index + 1}</td>
                                             <td> <MdPanoramaFishEye size={24}></MdPanoramaFishEye> </td>
                                             <td>{item?.title}</td>
                                             <td>{item?.description.slice(0, 15)}...</td>
                                             <td> <FaRegEyeSlash size={24}></FaRegEyeSlash>  </td>
                                             <td> {item?.status} </td>
                                             <td><FaEdit size={24}></FaEdit></td>
                                             <td><AiOutlineDelete size={24}></AiOutlineDelete></td>

                                        </tr>)
                                   }

                              </tbody>
                         </table>
                    </div>

               </Container>


          </div>
     );
};

export default ToDoList;