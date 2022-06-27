
const {usersList, moviesList} = require("../FakeData");
const _ = require("lodash");
const { PubSub } = require('graphql-subscriptions');
const { subscribe } = require("graphql");
const pubsub = new PubSub();

const NEW_USER = "NEW_USER";

const resolvers = {
    Query: {
        users: () => {
            if(usersList) return {users: usersList};
            return {message: "there was an error"};
        },
        user: (parent, args, context, info) => {

            const id = args.id;
            const user = _.find(usersList, {id: Number(id)});
            return user;
        },

        movies: () => {
            return moviesList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(moviesList, {name});
            return movie;
        }
    },
    User: {
        favoriteMovies: () => {
            return _.filter(moviesList, (movie) => {
                return movie.year >= 2000 && movie.year <= 2010
            });
        }
    },
    
    Mutation: {
        createUser : (parent, args, {pubsub}) => {
            
            const user = args.input;
            const lastId = usersList[usersList.length - 1].id;
            user.id = lastId+1;
            usersList.push(user);
            pubsub.publish(NEW_USER, {
                userAdded: user
            });
            return user;
        },

        updateUsername : (parent, args) => {
            const id = args.input.id;
            const newUsername = args.input.username;
            console.log(id, newUsername);
            let userUpdated;
            //or #USE const{id, newUsername} = args.input;
            usersList.forEach((user) => {
                if(user.id === Number(id)) {
                    console.log(user);
                    user.username = newUsername;
                    userUpdated = user;
                    console.log(user);
                }
            });
            return userUpdated;
        },
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(usersList, (user) => {
                return user.id === Number(id);
            });
            return `${id} removed.......`;
        }
    },

    UsersResult: {
        __resolveType(obj) {
            if(obj.users) {
                console.log(obj.users);
                return obj.users;
            }
            if(obj.message) {
                return obj.message;
            }
            return null;
        }
    },

    Subscription: {
        userAdded: {
            subscribe: (_, __, {pubsub}) => {
                return pubsub.asyncIterator(NEW_USER);
            }
        }
    }
};

module.exports = {resolvers};