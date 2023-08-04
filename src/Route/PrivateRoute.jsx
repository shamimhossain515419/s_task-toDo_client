import { useContext } from "react";
import { AuthContact } from "../Component/AuthProvider/AuthProvider";
import { Oval } from "react-loader-spinner";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

     const { user, loading, } = useContext(AuthContact);

     if (loading) {
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
     }

     if (user) {
          return children
     }
     return <Navigate to={'/login'} ></Navigate>
};

export default PrivateRoute;