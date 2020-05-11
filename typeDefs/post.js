import { gql } from 'apollo-server-express';

export default gql`
   extend type Query {
      post(slug: String!): Post
      posts(skip: Int, limit: Int): [Post]!
   }
   extend type Mutation {
      createPost(slug: String!, title: String!, content: String!, featuredImage: String, categories: [String]!): Post @auth(role: "author")
      editPost(slug: String!, updatedSlug: String, updatedTitle: String, updatedContent: String, updatedFeaturedImage: String, updatedCategories: [String]): Post @auth(role: "author")
      deletePost(slug: String!): PostDeleteResult
   }
   type Post {
      postID: ID!
      slug: String!
      title: String!
      content: String!
      featuredImage: String
      thumnail: String
      categories: [String]!
      categoriesList: [Category]!
      author: Author!
      created_at: String
   }
   type PostDeleteResult {
      status: Boolean!
      error: String
   }
`
