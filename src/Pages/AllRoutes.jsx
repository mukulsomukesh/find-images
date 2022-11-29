import { Routes, Route } from "react-router-dom";
import Authenticate from "../Pages/Authenticate"
import Home from "../Pages/Home"
import SingleImage from "./SingleImage";
import PrivateRoute from "../Components/PrivateRoutes";

function AllRoutes() {
    return (

      <div>
  
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/Authenticate" element={<Authenticate />}>
            {" "}
          </Route>
          <Route path="/SingleImage/:id" element={ <PrivateRoute> <SingleImage /> </PrivateRoute>  } >
            {" "}
          </Route> 
        </Routes>
  
      </div>
    
    );
  }
  
  export default AllRoutes;