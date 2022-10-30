import {Box,Image, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImages } from '../Redux/AppReducer/action';

function Body() {

  const images = useSelector((state) => state.AppReducer.images)
  const imgType= useState("landscape");
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages())
  },[])
  console.log(images)
 
  return (
<>

{imgType=="landscape" ?
// portrait images
<SimpleGrid minChildWidth={"280px"} w="94%" m="auto" pt="100px">
{images.results?.map((el)=>(
  <Box key={el.id} m="15px" h="fit-content" w="fit-content" border="2px" borderColor={"black"}> 
      <Image  m="auto" h="280px" w="280px" src={el.urls.thumb} />
  </Box>
))}
</SimpleGrid>:

// portrait images
<SimpleGrid minChildWidth={"290px"} w="95%" m="auto" pt="100px">
{images.results?.map((el)=>(
  <Box key={el.id} m="15px" h="fit-content" w="fit-content" border="2px" borderColor={"black"}> 
      <Image  m="auto" h="400px" w="290px" src={el.urls.regular} />
  </Box>
))}
</SimpleGrid>
}

</>
  )
}

export default Body