import { FormControl,  InputGroup, InputRightElement, useDisclosure, Box, Text, ModalCloseButton, FormLabel, Input, ModalFooter, Button, Modal, ModalOverlay,
  ModalContent,ModalHeader,ModalBody } from '@chakra-ui/react'
import React,{useState} from 'react'
import { ForgotPasswordFun } from '../Redux/AuthReducer/action';
import {  useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'


function ForgotPassword() {

  const [email, setEmail] = useState("")
  const ForgotPasswordSuccess = useSelector((state) => state.AuthReducer.ForgotPasswordSuccess)
  const ForgotPasswordFail = useSelector((state) => state.AuthReducer.ForgotPasswordFail)
  const dispatch = useDispatch();

  function handelForgotFun(){
    if(email.length>0){
      dispatch(ForgotPasswordFun(email))
    }

  }



  return (
    <>

<ModalOverlay />
        <ModalContent>
          <ModalHeader> Forgot Password </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {ForgotPasswordSuccess?
            <Text color="green"> Reset password link sent to your Email, Also check your spam mails reset link might be present there. </Text>:
            <Text></Text>}
            <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email' />
            <Button disabled={ForgotPasswordSuccess} float={"right"} mt="10px" onClick={()=>{handelForgotFun()}}> Send Reset Link </Button>
            {email.length>0?
            <Text color="red">{ForgotPasswordFail}</Text>:
            "" }
          </ModalBody>
        </ModalContent>
      
    </>
  )
}

    export default ForgotPassword