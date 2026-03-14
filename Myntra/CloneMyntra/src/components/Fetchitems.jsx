import React from 'react'
import { useSelector } from 'react-redux'

const Fetchitems = () => {
  useSelector((store)=>store.fetchStatus)
  
  console.log(fetchStatus)
  return (
    <>
    <div>  FetchDone:{fetchStatus.fetchDone}</div>
      <div> currentlyFetching:{fetchStatus.currentlyFetching}</div>
    </>
  )
}

export default Fetchitems