import { gql } from 'apollo-server-express';

export default gql`
   extend type Query {
      category(slug: String!): Category
      categories: [Category]!
   }
   extend type Mutation {
      createCategory(slug: String, title: String!): Category @auth(role: "manager")
   }
   type Category {
      categoryID: ID!
      slug: String!
      title: String!
      posts: [Post]!
   }   
`