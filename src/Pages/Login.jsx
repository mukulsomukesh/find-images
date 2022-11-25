import { Tabs, Center, TabList, TabPanels, Tab, TabPanel, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { LoginFun, SingupFun } from '../Redux/AuthReducer/action';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';


function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [show, setShow] = useState(false)


  const name = useSelector((state) => state.AuthReducer.name)
  const isLogin = useSelector((state) => state.AuthReducer.isLogin)

  const [singup, setSingup] = useState([{
    name: "",
    email: "",
    pass: ""
  }])

  const [login, setLogin] = useState([{
    email: "",
    pass: ""
  }])

  const [singupBtnDisable, setSingupBtnDisable] = useState()

  const handleClick = () => setShow(!show)
  // this function handel login
  function handelLogin() {
    dispatch(LoginFun(login.email, login.pass))
    setLogin({ email: "", pass: "" })


  }

  // this function handel singup 
  function handelSingup() {

    setSingupBtnDisable(true)
    dispatch(SingupFun(singup.email, singup.pass, singup.name))
    setSingup({ name: "", email: "", pass: "" })
    setSingupBtnDisable(false)
  }


  useEffect(()=>{
    if (isLogin) {
      navigate("/");
    }
  },[isLogin])


  return (
    <>
      <Center bg="#edf2f7" h="100vh">
        <Box w="30%" border="1px" borderColor={"#3b5998"} bg="white" borderRadius={"10px"} p="10px" >


          <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
              <Tab>Login</Tab>
              <Tab>Singup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>

                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input value={login.email} onChange={(event) => setLogin((prev) => ({ ...prev, email: event.target.value }))} type="email" />

                  <FormLabel mt="20px" >Password</FormLabel>
                  <InputGroup size='md'>
                    <Input
                      value={login.pass} onChange={(event) => setLogin((prev) => ({ ...prev, pass: event.target.value }))}
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                    // placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button w="full" mt="20px" bg="#3b5998" color="white" onClick={() => { handelLogin() }}> Login </Button>

              </TabPanel>

              <TabPanel>

                <FormControl id="email">
                  <FormLabel>First Name</FormLabel>
                  <Input value={singup.name} onChange={(event) => setSingup((prev) => ({ ...prev, name: event.target.value }))} />

                  <FormLabel mt="20px">Email address</FormLabel>
                  <Input value={singup.email} onChange={(event) => setSingup((prev) => ({ ...prev, email: event.target.value }))} />

                  <FormLabel mt="20px" >Password</FormLabel>
                  <InputGroup size='md'>
                    <Input
                      value={singup.pass} onChange={(event) => setSingup((prev) => ({ ...prev, pass: event.target.value }))}
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                    // placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button w="full" mt="20px" bg="#3b5998" color="white" disabled={singupBtnDisable} onClick={() => { handelSingup() }}> Singup </Button>

              </TabPanel>
            </TabPanels>
          </Tabs>

        </Box>
      </Center>
    </>
  )
}

export default Login