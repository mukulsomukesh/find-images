
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Box, SimpleGrid, GridItem, Center } from '@chakra-ui/react'
import AllRoutes from './Pages/AllRoutes';
import Footer from './Components/Footer';


function App() {
  return (
<>
<Box bg="#edf2f7">
<AllRoutes />
  {/* <Home/> */}
  {/* <Login /> */}
  <Footer />
  </Box>

</>
  );
}

export default App;
