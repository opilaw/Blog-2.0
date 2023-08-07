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