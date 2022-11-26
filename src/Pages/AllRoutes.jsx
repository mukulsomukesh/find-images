import { Routes, Route } from "react-router-dom";
import Authenticate from "../Pages/Authenticate"
import Home from "../Pages/Home"
import SingleImage from "./SingleImage";
import PrivateRoute from "../Components/PrivateRoutes";

function AllRoutes() {
    return (
      <div>
        {/* Routes */}
  
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/Authenticate" element={<Authenticate />}>
            {" "}
          </Route>
          <Route path="/SingleImage" element={ <PrivateRoute> <SingleImage /> </PrivateRoute>  } >
            {" "}
          </Route> 
        </Routes>
  
        {/* Home */}
        {/* Login */}
        {/* Private Route: Dashboard */}
      </div>
    );
  }
  
  export default AllRoutes;