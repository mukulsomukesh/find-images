import { Input, Center, Image, Button, Text, Box, Flex, HStack, Select, IconButton, useDisclosure, Stack, Spacer } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { saveAs } from 'file-saver'
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { useEffect } from 'react';

function SingleImage({ data }) {
  const images = useSelector((state) => state.AppReducer.images)
  const [singleImg, setSingleImg] = useState()
  let { id } = useParams();

  useEffect(() => {

    for (let i = 0; i < images.results.length; i++) {

      if (images.results[i].id == id) {
        setSingleImg(images.results[i])
      }
    }


  }, [id, singleImg])

  const handelDownload = async (src) => {
    const canvas = await html2canvas(document.body);
    const dataURL = canvas.toDataURL(src);
    downloadjs(dataURL, 'download.png', 'image/png');
  }




  return (
    <>


      {singleImg == undefined ?
        <Text>undefined</Text> :
        <Box p="20px" w="full">
          <Image src={singleImg.urls.full} />
          <Button bg="blue" onClick={() => { handelDownload(singleImg.urls.full) }} m="auto"  > Download </Button>
        </Box>
      }

    </>
  )
}

export default SingleImage;