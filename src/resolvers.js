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
    },
    Mutation: {
        createTask(_, { input }) {
            //console.log(input)
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }
};

//destructuring, bring only some parts of object