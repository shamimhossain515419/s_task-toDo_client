import { BiSolidEyedropper } from "react-icons/bi";
import TaskApi from "../../Api/Taskapi";
import ManageCard from "./ManageCard";


const ManageTodo = () => {

     const [toDoData, refetch] = TaskApi();


     return (
          <div className=" my-20 p-2 md:p-10">


               <div className=" md:flex justify-between items-center gap-3">
                    <div>
                         <h1 className="text-3xl font-bold "> Manage Your ToDoS</h1>
                         <p className=" text-base my-2"> You can see all the toDoS which are added by you.</p>
                    </div>
                    <div>
                         <button> Sorting </button>
                    </div>
               </div>


               <div>
                    {
                         toDoData || toDoData?.length > 0 ? <>

                              <div className=" md:grid  grid-cols-2 gap-10 ">

                                   {
                                        toDoData?.map(item => <ManageCard item={item} key={item._id}>



                                        </ManageCard>)
                                   }
                              </div>

                         </> : <>

                              <div className=" flex justify-center items-center gap-3 h-[80vh]">

                                   <div className=" text-center mx-auto max-w-[400px] my-24 ">
                                        <div className=" inline-block  bg-[#ee9c29] text-lg font px-10 py-2  rounded-md text-white"> You don't have any todoS in your list </div>
                                        <div className="  mt-9 inline-block  cursor-pointer">
                                             <div className=" addTodoCard flex justify-center items-center">
                                                  <BiSolidEyedropper size={24}></BiSolidEyedropper>
                                                  <span> Add new ToDOs</span>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </>
                    }
               </div>



          </div>
     );
};

export default ManageTodo;