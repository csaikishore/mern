
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FetchData1() {
  const [post,setPost] = useState({})
  const [id,setId] = useState(1)
  const [idFromBtnClick,setIdFromBtnClick] = useState(1)

  useEffect( ()  => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
    console.log(res.data)
 setPost(res.data)
 
    })
    .catch((err) => {
        console.log(err)
    })
  },[idFromBtnClick])

  const handlePost = () => {
      setIdFromBtnClick(id);
  }
  return (
    <div>
      <label>Enter Post ID:</label><input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>
        <button onClick={handlePost}>Get Post</button>
      </div>
      <h3>{post.title}</h3>
    </div>
  )
}
