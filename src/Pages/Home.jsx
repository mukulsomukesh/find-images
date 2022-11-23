import React,{useState, useEffect} from 'react'
import Navbar from "../Components/Navbar"
import Body from '../Components/Body'
import PageChangeButton from '../Components/PageChangeButton'
import { useDispatch, useSelector } from 'react-redux'
import { getImages } from '../Redux/AppReducer/action';
import {Image } from '@chakra-ui/react'
import ColorSelect from '../Components/ColorSelect'


export default function Home() {
  
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)
  const [orientation, setOrientation] = useState("landscape")
  const [imgColor, setColor] = useState()
  const [query, setQuery] = useState("car")

  useEffect(() => {

    const queryParams={
      params:{
        query: query,
        color:imgColor,
        orientation:orientation,
        client_id:"KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc",
        per_page: 15,
        page:page,
      }
    }

    dispatch(getImages(queryParams))
  },[page,orientation, query,imgColor])

  console.log(page, orientation, query, imgColor)

  return (
    <>
    <Navbar setOrientation={setOrientation} query={query} setQuery={setQuery} setColor={setColor} />
    {/* <ColorSelect imgColor={imgColor} setColor={setColor} /> */}
    <Body orientation={orientation} />
    <PageChangeButton setPage={setPage} page={page} />
    </>
  )
}



// https://api.unsplash.com/search/photos?per_page=50&query=flowers&client_id=KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc