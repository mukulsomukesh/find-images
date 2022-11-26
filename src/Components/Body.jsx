import {Box,Image,Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImages } from '../Redux/AppReducer/action';
import { Link } from "react-router-dom";

function Body({orientation}) {

  const images = useSelector((state) => state.AppReducer.images)
  console.log(images)

  return (
<>

{orientation=="landscape" ? 
<SimpleGrid minChildWidth={"400px"} w="94%" m="auto" pt="130px">
{images.results?.map((el)=>(
  <Link to={"/SingleImage"} >
  <Box key={el.id} m="10px" ml="auto" mr="auto"  h="fit-content" w="fit-content" border="2px" borderColor={"black"}> 
      <Image  m="auto" h="250px" w="400px" src={el.urls.thumb} />
  </Box>
  </Link>
))}
</SimpleGrid> : <Text></Text>}

{/* // portrait images */}
{orientation=="portrait" ?
 <SimpleGrid minChildWidth={"290px"} w="95%" m="auto" pt="130px">
{images.results?.map((el)=>(
    <Link to={"/SingleImage"} >
  <Box key={el.id} m="15px" ml="auto" mr="auto" h="fit-content" w="fit-content" border="2px" borderColor={"black"}> 
      <Image  m="auto" h="400px" w="290px" src={el.urls.thumb} />
  </Box>
  </Link>
))}
</SimpleGrid>: <Text></Text> }

{/* // squrish images */}
{orientation=="squarish" ?
 <SimpleGrid minChildWidth={"290px"} w="95%" m="auto" pt="130px">
{images.results?.map((el)=>(
    <Link to={"/SingleImage"} >
  <Box key={el.id} m="15px" ml="auto" mr="auto" h="fit-content" w="fit-content" border="2px" borderColor={"black"}> 
      <Image  m="auto" h="290px" w="290px" src={el.urls.thumb} />
  </Box>
  </Link>
))}
</SimpleGrid>: <Text></Text> }

</>
  )
}

export default Body