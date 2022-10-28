import logo from './logo.svg';
import './App.css';
import { Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [temp, setTemp] = useState()

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/1')
    .then(function (response) {
      setTemp("Yes")
    })
    .catch(function (error) {
      // handle error
      setTemp("No")
    })
  },[])


  return (
<>

<Heading textAlign={"center"}>Axios Work: {temp}</Heading>
<Heading  textAlign={"center"}>Chakraui Work: Yes</Heading>

</>
  );
}

export default App;
