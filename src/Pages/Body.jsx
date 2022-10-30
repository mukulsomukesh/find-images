import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImages } from '../Redux/AppReducer/action';

function Body() {

  const images = useSelector((state) => state.AppReducer.images)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages())
  },[])
  console.log(images)
 
  return (
    <div>

    </div>
  )
}

export default Body