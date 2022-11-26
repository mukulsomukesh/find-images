import {Input, Button, Text , Box, Flex, HStack, Select , IconButton, useDisclosure, Stack, Spacer} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon, Search2Icon} from "@chakra-ui/icons"
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

const Links = ["Black","White","Yellow", "orange", "Red", "Purple", "Magenta", "Green", "Teal", "Blue"];


export default function Simple({setOrientation, query, setQuery, setColor}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [str, setStr]=useState("")
  const name = useSelector((state) => state.AuthReducer.name)
  const isLogin = useSelector((state) => state.AuthReducer.isLogin)

  

  console.log(str, query)
  return (
    <>
          <Box  as="header" position={"absolute"}  pos={'fixed'}  w="full">

          <Flex h={16} pl="3%" pr="3%" alignItems={'center'} justifyContent={'space-between'} bg="#3b5998" w="full" >

{
  isLogin?
  <Text as="b" color="white" fontSize={{ base: 'xs', md: 'sm', lg: 'lg' }}>Hi, {name} </Text>
  :
  <Link to={"/Authenticate"} >  <Text as="b" color="white" fontSize={{ base: 'xs', md: 'sm', lg: 'lg' }}> Login/Singup </Text>
  </Link>
}



<Spacer/>
<Box as="b" fontSize={"30px"}  color="white" display={"flex"} w="250px"> 
<Input border="2px" borderRightRadius={"0px"} placeholder='Basic usage' value={str} onChange={(e)=>{setStr(e.target.value)}} />
<Button borderLeftRadius={"0px"}  leftIcon={<Search2Icon color="#0f1624"/>} 
onClick={()=>{ setQuery(str) }} ></Button>
</Box>
</Flex>

      {/* <Box px={4} pl="3%" pr="3%"  as="header" position="fixed" bg="#3b5998" w="full"> */}

        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} bg="#edf2f7" pl="3%" pr="3%" >
        
          <IconButton
            size={'md'}
            bg="#3b5998"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              color="#3b5998"          
              // _hover={{border:"2px", BorderColor: '#dc143c' }}
              spacing={5}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
           <Box w="fit-content" h="fit-content" >
           <Text  style={{textDecoration:"none"}}  key={link} as="b" onClick={()=>{ setColor(link.toLowerCase()) }}  >{link}</Text>
           </Box>
           ))}
              
            </HStack>
             {/* <BsFillSunFill size="25px" />  <BsFillMoonFill size="25px" color='black' />  */}
          </HStack>



          <Spacer/>
<Box as="b" fontSize={"30px"}  color="white" display={"flex"}> 
  <Select variant='filled' color="black" borderColor={"#3b5998"} placeholder='orientation' onChange={(e)=>{setOrientation(e.target.value)}} >
  <option value="landscape"> Landscape</option>
  <option value="portrait"> Portrait</option>
  <option value="squarish"> Squarish</option>
    </Select>
         </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Text key={link} color="white" as="b" onClick={()=>{ setColor(link.toLowerCase()) }}>{link}</Text>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>




      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}