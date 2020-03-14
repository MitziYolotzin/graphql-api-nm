import { tasks } from "./sample";

//controller
//define
//res to client
//the data that my app can use
export const resolvers = {
    Query: {
        hello: () => {
            return 'hello graphql'
        },
        greet(root, { name }){
            //console.log(args.name);
            return `hello ${name}!`;
        },
        tasks() {
            return tasks;
        }
    }
};

//destructuring, bring only some parts of object