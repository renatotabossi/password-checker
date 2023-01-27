import "reflect-metadata"

import path from "node:path"

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user-resolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            UserResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
        validate: { forbidUnknownValues: false }
    })
    
    const server = new ApolloServer({
            schema,
            formatError: (error) => error
    });

    const { url } = await server.listen({
        port: 8080
    })
    
    console.log(`Running on port ${url}`)
    
}

bootstrap()