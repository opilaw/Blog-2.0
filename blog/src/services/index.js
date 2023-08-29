import { graphql } from 'graphql'
import {request, gql} from 'graphql-request'
import { GraphQLClient } from 'graphql-request'

// const graphqlAPI= process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts= async() =>{
const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli0f0owc3mov01uh9av8epwq/master'
    //endpoint
    const graphQLClient = new GraphQLClient(
    endpoint
    )
    const query = gql`
    query Assets {
        assets {
          createdAt
          id
          publishedAt
          fileName
          url
          updatedAt
        }
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }`

      const result= await graphQLClient.request(query)
      return result.postsConnection.edges
}

export const getRecentPosts = async () =>{
  const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli0f0owc3mov01uh9av8epwq/master'
    //endpoint
    const graphQLClient = new GraphQLClient(
    endpoint
    )
  const query = gql`
  query GetPostDetails() {
    posts(
      orderBy: createdAt_ASC
      last: 3
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
`;
  const result= await graphQLClient.request(query)
  return result.posts
}

export const getSimilarPosts = async (slug, categories) =>{
  const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli0f0owc3mov01uh9av8epwq/master'
    //endpoint
    const graphQLClient = new GraphQLClient(
    endpoint
    )
  const query = gql`
  query GetPostDetails($slug: String!, $categories: [String!]) {
    posts(
      where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
      last: 3
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
`;
  const result= await graphQLClient.request(query,{ slug, categories})
  return result.posts
}
export const getCategories = async(categories)=>{
  const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli0f0owc3mov01uh9av8epwq/master'
    //endpoint
    const graphQLClient = new GraphQLClient(
    endpoint
    )
  const query = gql`
  query GetCategories{
    categories {
      name
      slug
    }
  }
  `
  const result= await graphQLClient.request(query, categories)
  return result.categories
}


export const getPostDetails= async(slug) =>{
  const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli0f0owc3mov01uh9av8epwq/master'
      //endpoint
      const graphQLClient = new GraphQLClient(
      endpoint
      )
      const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          excerpt
          featuredImage {
            url
          }
          postsConnection {
            edges {
              node {
          author{
            name
            bio
            photo {
              url
            }
          }
          createdAt
          slug
          content {
            raw
          }
          categories {
            name
            slug
          }
        }}}}
      }`
  
        const result= await graphQLClient.request(query, {slug})
        return result.post;
  }