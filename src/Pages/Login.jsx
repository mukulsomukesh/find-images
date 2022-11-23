import { Tabs, Center, TabList, TabPanels, Tab, TabPanel, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement , Button } from '@chakra-ui/react'
import React,{useState} from 'react'

function Login(){

    const [show, setShow] = useState(false)

    const [passLogin, setPassLogin] = useState("")
    const [emailLogin, setEmailLogin] = useState("")
    const [emailSingup, setEmailSingup] = useState("")
    const [passSingup, setPassSingup] = useState("")
    const [nameFirst, setNameFirst] = useState("")
    const [nameLast, setNameLast] = useState("")

    


    const handleClick = () => setShow(!show)

    function handelForm(){
        
    }

    return(
        <>

<Box w="50%" m="auto" mt="9%" border="1px" borderRadius={"10px"} p="10px" mb="50px">
  

        <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Login</Tab>
    <Tab>Singup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>

    <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            
         <FormLabel  mt="20px" >Password</FormLabel>
    <InputGroup size='md'>            
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </FormControl>

    <Button w="full" mt="20px" bg="#3b5998" color="white" onClick={()=>{ handelForm() }}> Login </Button>

    </TabPanel>

    <TabPanel>

    <FormControl id="email">
              <FormLabel>First Name</FormLabel>
              <Input  />
            
              <FormLabel mt="20px">Last Name</FormLabel>
              <Input />
            
              <FormLabel  mt="20px">Email address</FormLabel>
              <Input type="email" />
            
         <FormLabel  mt="20px" >Password</FormLabel>
    <InputGroup size='md'>            
      <Input
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

    <Button w="full" mt="20px" bg="#3b5998" color="white" onClick={()=>{ handelForm() }} > Singup </Button>

    </TabPanel>
  </TabPanels>
</Tabs>

</Box>

        </>
    )
}

export default Login