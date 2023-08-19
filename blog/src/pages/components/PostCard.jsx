import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import styles from '@/styles/Postcard.module.scss'



const PostCard = ({post}) => {
  return (
    <div className={styles.PostcardContainer}>
      <div className={styles.ImageContainer}>
<img 
src={post.featuredImage.url} 
alt={post.title} height={200} width={300}/>
      </div>
      <h1 className={styles.TitlePost} >
        <Link href={`/post/${post.slug}`} className={styles.TitlePostLink}>{post.title}</Link>
      </h1>
      <div className={styles.LogoTimeContainer}>
      <div className={styles.IntroText}>
        <img src={post.author.photo.url} alt={post.author.name} width={40} height={40}/>
        <p>{post.author.name}</p>
      </div>
      <div className={styles.Time}>
        <img src="/iconTime.png" alt="publicated" width={30} height={30} />
      <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      </div>
      </div>
      <p>{post.excerpt}</p>
      <div className={styles.ButtonPostContainer}>
      
        <Link href={`/post/${post.slug}`}>
        <button className={styles.ButtonPost}>Continue reading</button>

        </Link>
      </div>
    </div>
    
  )
}

export default PostCard