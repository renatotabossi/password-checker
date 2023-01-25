import {ApolloServer, gql} from 'apollo-server'


const typeDefs = gql/*js*/`
    type Query {
        helloWorld: String!
    }

    type Mutation {
        createUser(name: String): String!
    }
`


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            helloWorld: () => {
                return 'Hello World'
            }
        }, 

        Mutation: {
            createUser: (parent, args, ctx) => {}
        }
    }
})


server.listen().then(({url}) => {
    console.log(`HTTP server listening on ${url}`);
})