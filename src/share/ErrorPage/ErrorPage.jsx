import {Link } from 'react-router-dom'
import img from '../../../public/error.png'
const ErrorPage = () => {
     return (
          <div className=" flex justify-center items-center h-[90vh]  gap-2">

           <div>
                <img src={img} alt="" />
                  
                 <div className='  my-10 text-center '>
                 <Link  to={'/'} classNamFe="bg-[#077eed]  text-white px-10 py-3 rounded-md "> Go to Home </Link>
                 </div>
               </div>
          </div>
     );
};

export default ErrorPage;