
//define
//res
//the data that my app can use
export const resolvers = {
    Query: {
        hello: () => {
            return 'hello graphql'
        },
        greet(root, { name }){
            //console.log(args.name);
            return `hello ${name}!`;
            
        }
    }
};