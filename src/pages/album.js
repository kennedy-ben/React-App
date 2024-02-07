import React, { useEffect } from 'react'
import Header from './Header'

export default function Album() {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(resp => resp.json())
        .then(data => console.log(data))
    })
  return (
    <div>
    <Header/>
      <p>This is the page shown when you select an album</p>
      <p>The page should list an album’s photos</p>
      <p>The page must run a GET request for the album selected</p>
      <p>The page must run a GET request for an album’s photos</p>
    </div>
  )
}
