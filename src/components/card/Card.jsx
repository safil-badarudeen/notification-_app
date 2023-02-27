import React, { useState } from 'react'
import {  BiLike, BiComment } from 'react-icons/bi';

import "./card.css"
 

function Card({post}) {
  const [like , setLike] = useState(false)

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImage} alt="" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImage" />
      <div className="interaction">
        <div>
          {like ? <BiLike onClick={()=>setLike(false)}  size={30}/>  : <BiComment onClick={()=>setLike(true)} size={30}/>}
        
        
        </div>
       
        
      </div>

    </div>
  )
}

export default Card