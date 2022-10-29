import {Input, Button , Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Spacer} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon, Search2Icon} from "@chakra-ui/icons"

const Links = ["JPG","PNG","VECTOR"];


export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} pl="3%" pr="3%"  as="header" position="fixed" bg="#0f1624" w="full">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
        <Box as="b" fontSize={"30px"}  color="#dc143c" display={"flex"}> 
        <Input borderRightRadius={"0px"} placeholder='Basic usage' w="80" />
        <Button borderLeftRadius={"0px"}  leftIcon={<Search2Icon/>}></Button>
         </Box>

        <Spacer/>
          <IconButton
            size={'md'}
            bg="#dc143c"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              color="white"          
              // _hover={{border:"2px", BorderColor: '#dc143c' }}
              spacing={5}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link  style={{textDecoration:"none"}}  key={link} as="b" >{link}</Link>
              ))}
            </HStack>
             {/* <BsFillSunFill size="25px" />  <BsFillMoonFill size="25px" color='black' />  */}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link} as="b">{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}