import React from 'react'
import { Flex, Spacer, Button, Box } from '@chakra-ui/react'
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons"

export default function PageChangeButton() {
  return (
<>

<Flex w="93%" pt="10"  pb="10" m="auto">
<Button bg="#3b5998" color="white"  leftIcon={<ArrowBackIcon />} >
    Prev
  </Button>
  <Spacer />
  <Button  bg="#3b5998" color="white"  rightIcon={<ArrowForwardIcon />} >
    Next
  </Button>
</Flex>

</>
  )
}
