import React from 'react'
import React, {useEffect} from 'react'
import { useState } from 'react'

function Github() {
    const [data, setData] = useState([])
     useEffect (() =>{
        fetch('https://api.github.com/users/shakeerprince')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            SetData(data)
        })
    }, [])
  return (
    <div className='text-center m-5 bg-gray-600 text-white
    p-4 text-3xl'>Github</div>
  )
}

export default Github


