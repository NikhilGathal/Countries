import React from 'react'
import { useRouteError } from 'react-router-dom'

export default  function Error() {
    const error = useRouteError()
    // console.log(error);
    
  return (

    <h1> <b> Something Went Wrong {JSON.stringify(error)} </b> </h1>
  )
}

