import { Outlet } from 'react-router-dom'
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Navbar from '../../../share/Navbar/Navbar';
const Dashboard = () => {
     return (
          <div>
               <Navbar></Navbar>
               <div className=" p-3 xl:px-4">
                    <div className=" flex gap-3">
                         <div className="   hidden md:block  shadow-2xl  md:h-screen p-2 md:min-w-[300px] xl:min-w-[350px]">
                              <DashboardNavbar></DashboardNavbar>

                         </div>

                         <div className=" w-full mx-auto ">
                              <Outlet>

                              </Outlet>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;