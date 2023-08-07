import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
        <span>{post.title}</span>
        <span>{post.excerpt}</span>
    </div>
    
  )
}

export default PostCard