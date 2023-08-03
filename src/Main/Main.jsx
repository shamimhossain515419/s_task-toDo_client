import { Outlet } from "react-router-dom";
import Navbar from "../share/Navbar/Navbar";


const Main = () => {
     return (
          <div>
               <Navbar></Navbar>
               <div className="min-h[100ch-300px]">
               <Outlet></Outlet>
               </div>
          </div>
     );
};

export default Main;