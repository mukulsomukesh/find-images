import React from 'react'
import Navbar from "../Components/Navbar"
import Body from '../Components/Body'
import PageChangeButton from '../Components/PageChangeButton'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Body/>
    <PageChangeButton/>
    </>
  )
}


// https://api.unsplash.com/search/photos?per_page=50&query=flowers&client_id=KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc