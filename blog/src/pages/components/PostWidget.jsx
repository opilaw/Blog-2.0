import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts } from '@/services'
import { getSimilarPosts } from '@/services'
import Image from 'next/image';
import styles from '@/styles/PostWidget.module.scss'
const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  
  useEffect(()=>{
    if(slug){
      getSimilarPosts(categories, slug)
      .then((result)=> setRelatedPosts(result))
    } else{
      getRecentPosts()
      .then((result)=> setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className={styles.PostWidgetContainer}>
    <h3 >{slug ? 'Related Posts' : 'Recent Posts'}</h3>
    {relatedPosts.map((post)=>
      <div className={styles.RecentContainer}>
        <img alt={post.title}src={post.featuredImage.url} height={60} width={70} />
        <div className={styles.TitleAndDate}>
        <div key={post.title}  >
          <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
          <Link href={`/post/${post.slug}`} key={post.title} className={styles.title} >
           <p className={styles.title}>{post.title}</p> 
          </Link>
        </div>
        </div>
      </div>
    )}
    </div>
  )
}
export default PostWidget