import React from 'react'
import {getPosts, getPostDetails} from  '@/services'
import { Categories, PostWidget} from '../components'
// import {PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '@components/components'
import PostDetail from '../components/PostDetail'
import Author from '../components/Author'
import  Comments from '../components/Comments'
import  CommentsForm from '../components/CommentsForm'


 const PostDetails = ({post}) => {
    console.log(post)
  return (
    <div className=''>
        <div>
       <PostDetail post={post} />
            <Author author= {post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug}/>
            </div>
        <div>
           <PostWidget slug={post.slug} categories={post.categories.map((category)=>category.slug)}/>
           <Categories />
        </div>
    </div>
  )}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
      props: {
        post: data,
      },
    };
  }
  export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: false,
    };
  }