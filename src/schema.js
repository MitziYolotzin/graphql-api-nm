//connect resolvers with typedef
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";


//types of data for consult
//client consult
//define type
const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});