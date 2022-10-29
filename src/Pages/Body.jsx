import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Body() {

    const [temp, setTemp] = useState("")

  useEffect(()=>{
    axios.get('https://api.unsplash.com/search/photos?per_page=50&query=flowers&client_id=KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc')
    .then(function (response) {
        const data = response.data
      setTemp(data)
    })
    .catch(function (error) {
      // handle error
      console.log(error)
        
    })
  },[])

  console.log(temp)


  return (
    <div>

    </div>
  )
}

export default Body