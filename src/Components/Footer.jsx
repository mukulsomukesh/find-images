import {Box, Container, Stack, Text, Link, useColorModeValue, } from '@chakra-ui/react';
  
  export default function Footer() {
    return (
      <Box
        bg={"#3b5998"}
        color={"white"}>
        <Container
          as={Stack}
          maxW={'6xl'}
          p={5}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={5}>
           <Link> Contact me - mukulsomukesh@gmail.com </Link>
            {/* <Link href={'#'}><BsGithub /></Link> */}
          </Stack>
          <Text> Develop by Mukul Jatav </Text>
        </Container>
      </Box>
    );
  }