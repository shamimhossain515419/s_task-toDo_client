import { AiOutlineDelete } from "react-icons/ai";

import moment from 'moment';
const ManageCard = ({ item }) => {
     const { title, description, date, name, email, status, time } = item;
     return (
          <div className=" mt-12 shadow-md p-4 rounded-lg">
               <div className=" flex justify-end items-center w-full">
                    <div className=" text-right  text-[#ec2c2c] rounded-md inline-block cursor-pointer"><AiOutlineDelete size={24}></AiOutlineDelete></div>
               </div>

               <div>
                    <h1 className=" text-2xl font-medium my-4"> {title}</h1>
                    <p className=" text-base my-5"> {description} </p>
               </div>


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
          </div>
     );
};

export default ManageCard;