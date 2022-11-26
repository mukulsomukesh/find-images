import { useDispatch, useSelector } from 'react-redux'
import {Navigate} from "react-router-dom"

const PrivateRoute = ( {children} ) => {
    const isLogin = useSelector((state) => state.AuthReducer.isLogin)

if(!isLogin){
    return  <Navigate to="/Authenticate"></Navigate>
    }
    return children;
  
  };

export default PrivateRoute