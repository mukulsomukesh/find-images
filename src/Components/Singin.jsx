import { FormControl,  InputGroup, InputRightElement, useDisclosure, Box, Text, ModalCloseButton, FormLabel, Input, ModalFooter, Button, Modal, ModalOverlay,
  ModalContent,ModalHeader,ModalBody } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LoginFun } from '../Redux/AuthReducer/action';
import { useDispatch} from 'react-redux'
import ForgotPassword from "../Components/ForgotPassword"


  export default function SimpleCard() {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [login, setLogin] = useState([{
      email:"",
      pass:""
    }])

    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )

    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    const handleClick = () => setShow(!show)
    // this function handel login
    function handelLogin() {
      dispatch(LoginFun(login.email, login.pass))
      setLogin({ email: "", pass: "" })
    }

    return (
      <>
    <FormControl id="email">
      <FormLabel>Email address</FormLabel>
      <Input value={login.email} placeholder="example@gmail.com" onChange={(event) => setLogin((prev) => ({ ...prev, email: event.target.value }))} type="email" />

      <FormLabel mt="20px" >Password</FormLabel>
      <InputGroup size='md'>
        <Input
        placeholder="********"
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
      
      <Box>
      <Text onClick={onOpen} bg="transparent" mt="10px" color="#3e6ff4" fontWeight={"semibold"}>Forgot password? </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ForgotPassword />
        </Modal>
      </Box>


    </FormControl>

    <Button w="full" mt="20px" bg="#3b5998" color="white" onClick={() => { handelLogin() }}> Login </Button>

    </>
    );
  }