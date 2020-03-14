
//define
//res
//the data that my app can use
export const resolvers = {
    Query: {
        hello: () => {
            return 'hello graphql'
        },
        greet(){
            return 2;
        }
    }
};