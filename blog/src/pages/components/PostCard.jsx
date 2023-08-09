import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div>
      <div className="image-container">
<img 
src={post.featuredImage.url} 
alt={post.title} />
      </div>
      <h1 className='article-title'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='intro-text'>
        <img src={post.author.photo.url} alt={post.author.name} width={300} height={300}/>
        <p>{post.author.name}</p>
      </div>
      <div><p>{moment(post.createdAt).format('MMM DD, YYYY')}</p></div>
      <p>{post.excerpt}</p>
      <div>
        <Link href={`/post/${post.slug}`}>
          <span>Continue reading</span>
        </Link>
      </div>
    </div>
    
  )
}

export default PostCard