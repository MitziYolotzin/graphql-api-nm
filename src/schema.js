//connect resolvers with typedef
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";


//types of data for consult
const typeDefs = `
    type Query {
        hello: String
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});