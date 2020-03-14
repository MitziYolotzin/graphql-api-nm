import { tasks } from "./sample";

import User from "./models/User";

//controller
//define
//res to client
//the data that my app can use
export const resolvers = {
    Query: {
        hello: () => {
            return 'hello graphql'
        },
        greet(root, { name }, ctx){
            //console.log(args.name);
            console.log(ctx);
            return `hello ${name}!`;
        },
        tasks() {
            return tasks;
        },
        async Users() {
            //const users = await User.find();
            return await User.find();
        }
    },
    Mutation: {
        createTask(_, { input }) {
            //console.log(input)
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }){
            const newUser = new User(input)
            await newUser.save();
            //console.log(newUser);
            return newUser;
            
        },
        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser (_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }
    }
};

//destructuring, bring only some parts of object