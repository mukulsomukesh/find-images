import {Input,Center, Image, Button, Text , Box, Flex, HStack, Select , IconButton, useDisclosure, Stack, Spacer} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { saveAs } from 'file-saver'
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

function SingleImage(){
    const name = useSelector((state) => state.AuthReducer.name)


    const handelDownload = async () => {
        const canvas = await html2canvas(document.body);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
      }

    return(
        <>
          {/* <Box  as="header" position={"absolute"}  pos={'fixed'}  w="full">

<Flex h={16} pl="3%" pr="3%" alignItems={'center'} justifyContent={'space-between'} bg="#3b5998" w="full" >
<Text as="b" color="white" fontSize={{ base: 'xs', md: 'sm', lg: 'lg' }}>Hi, {name} </Text>
</Flex>
</Box> */}



<Box h="100vh" w="full" pt="50px">
    <Box m="auto" w="200px">
        <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4d5sSeleXrkSS9hG3--cZ70LZP9VSpls_6Mk5va76eQ&s"} />
    
    <Button border={"2px"} m="auto" onClick={handelDownload}>Download</Button>
    </Box>
</Box>

        </>
    )
}

export default SingleImage;