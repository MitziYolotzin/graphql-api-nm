
//define
//res
//the data that my app can use
export const resolvers = {
    Query: {
        hello: () => {
            return 'hello graphql'
        },
        greet(root, args){
            console.log(args.name);
            return `hello ${args.name}!`;
            
        }
    }
};