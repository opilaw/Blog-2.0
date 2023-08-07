import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {PostCard, Categories, PostWidget} from './components'
import {getPosts} from '../services'

const inter = Inter({ subsets: ['latin'] })

const test= 2;

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <div className={styles.postContainer}>
      {posts.map((post)=>(
       <PostCard post={post} key={post.title}></PostCard>
  
      ))}
       </div>
<div>
  <PostWidget></PostWidget>
  <Categories></Categories>
</div>
      
      </main>
    </>
  )
}

export async function getStaticProps(){
  const posts= (await getPosts()) || []

  return {
    props: {posts}
  }
}