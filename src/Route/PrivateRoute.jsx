import { useContext } from "react";
import { AuthContact } from "../Component/AuthProvider/AuthProvider";
import { Oval } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

     const { user, loading, } = useContext(AuthContact);
     const location = useLocation();

     if (loading) {
          <div className=" flex justify-center items-center h-screen">

               <Oval
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
               />
          </div>
     } else if (user) {
          return children
     } else {
          return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
     }







};

export default PrivateRoute;