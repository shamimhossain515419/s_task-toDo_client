import './Loading.css'
import { useState, useEffect } from 'react'
const Loading = ({ children }) => {
     const [seconds, setSeconds] = useState(0);

     useEffect(() => {
          if (seconds<=10) {
               const interval = setInterval(() => {
                    setSeconds(prevSeconds => prevSeconds + 1);
               }, 1000);

               return () => clearInterval(interval);
          }



     }, [seconds]);

     if (seconds >= 2) {
          return children
     }

     return (
          <div className=" flex justify-center items-center w-full h-screen ">
               <div className=" w-[150px] px-7 h-[150px] flex justify-center items-center  loading  p-10  text-2xl font-medium text-blue-500 ">
                    {"</Task-todo>"}
               </div>
          </div>
     );
};

export default Loading;