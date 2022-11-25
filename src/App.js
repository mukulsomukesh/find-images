
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home';
import Login from "./Pages/Login"
import {Box, SimpleGrid, GridItem, Center } from '@chakra-ui/react'
import AllRoutes from './Pages/AllRoutes';


function App() {
  return (
<>
<Box bg="#edf2f7">
<AllRoutes />
  {/* <Home/> */}
  {/* <Login /> */}
  </Box>

</>
  );
}

export default App;
