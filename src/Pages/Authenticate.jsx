import { Center, Flex, AlertIcon, Tabs, Text, Wrap, TabList, TabPanels, Tab, TabPanel, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, VStack, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ForgotPasswordFun } from '../Redux/AuthReducer/action';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Signin from "../Components/Singin"
import Singup from '../Components/Singup';



function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isLogin = useSelector((state) => state.AuthReducer.isLogin)


  function handelForgot() {

    dispatch(ForgotPasswordFun("mukuljatav1010@gmail.com"))
  }


  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin])


  return (
    <>

      <Flex w="full" bg="#edf2f7" h="92vh" minH={"fit-content"} pt="3%" flexDirection={"column"} gap="20px" >

        <Box textAlign={"center"}>
          <Heading> Login </Heading>
          <Text> to enjoy all of our cool features ✌️ </Text>
        </Box>


        <Center>
          <Box w={{ sm: '90%', md: '60%', lg: '30%' }} m="auto" border="1px" borderColor={"#3b5998"} bg="white" borderRadius={"10px"} p="10px" >
            <Tabs isFitted variant="enclosed">
              <TabList mb='1em' >
                <Tab>Login</Tab>
                <Tab>Singup</Tab>
              </TabList>

              <TabPanels>

                <TabPanel>
                  <Signin />
                </TabPanel>

                <TabPanel>
                  <Singup />
                </TabPanel>

              </TabPanels>

            </Tabs>
          </Box>
        </Center>


        <Box textAlign={"center"}>
          {/* <Button onClick={handelForgot}> forgot </Button> */}
          <Text onClick={() => {  navigate("/"); }} as="b"> Back to home</Text>
        </Box>

      </Flex  >
    </>
  )
}

export default Login