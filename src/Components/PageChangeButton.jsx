import React from 'react'
import { Flex, Spacer, Button, Box } from '@chakra-ui/react'
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons"

export default function PageChangeButton({setPage, page}) {
  return (
<>

<Flex w="93%" pt="10"  pb="10" m="auto">
<Button bg="#3b5998" color="white" disabled={page==1} onClick={()=>{ setPage(page-1) }} leftIcon={<ArrowBackIcon />} >
    Prev
  </Button>
  <Spacer />
  <Button  bg="#3b5998" color="white" onClick={()=>{ setPage(page+1) }}  rightIcon={<ArrowForwardIcon />} >
    Next
  </Button>
</Flex>

</>
  )
}
