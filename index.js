const {ApolloServer} = require("apollo-server");
const {typeDefs} = require('./schema/type-defs');
const {resolvers} = require('./schema/resolvers');
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

const server = new ApolloServer({typeDefs, resolvers, context: ({req, res}) => ({req, res, pubsub})});

// create server. 
server.listen().then(({url}) => {
    console.log(`server is up and running at ${url}`);
});

// edited in github. 
