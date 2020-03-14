//connect resolvers with typedef
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

//route of sever
//types of data for consult
//client consult
//define type
const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    }

   
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});