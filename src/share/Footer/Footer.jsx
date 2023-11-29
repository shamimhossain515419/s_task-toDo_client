import './Footer.css';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa'
import moment from 'moment';
const Footer = () => {
     return (
          <div style={{ clipPath: `ellipse(80% 100% at 51.45% 100%)` }}
               className=" mt-16 md:mt-0 FooterBg   py-6 ">
               <div className=" Footer">
                    <div className=' text-lg my-5 text-center '>
                         <Link className=' hover:underline mx-2'>  About Me</Link>
                         <Link className=' hover:underline mx-2'> Contact Us</Link>
                    </div>
                    {/* Footer ICon  */}
                    <div className=' IConFooter'>
                         <FaFacebook size={24}></FaFacebook>
                         <FaGoogle size={24}></FaGoogle>
                         <FaInstagram size={24}></FaInstagram>
                    </div>
               </div>
               <hr />
               <div className=' text-center my-2 text-white '>
                    <div className=' text-lg font-medium'>
                         Copyright © {moment().format(" YYYY, ")}- All rights reserved
                    </div>
                    <p className=' my-3'> S-task-toDo</p>
               </div>
          </div>
     );
};

export default Footer;