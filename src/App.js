import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home';


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

<Home/>

</>
  );
}

export default App;
