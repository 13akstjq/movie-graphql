import {GraphQLServer} from 'graphql-yoga'; // graphql 서버 import
import resolvers from './graphql/resolvers'; 
const server = new GraphQLServer({ // server 객체 만들기 
    typeDefs : "graphql/schema.graphql", // 객체의 schema를 정의하는 것은 typedDefs로 한다. 
    resolvers // query(문제)를 해결해주는 resolver를 객체에 넣는다. 
})

server.start( () => console.log("GraphQL Server Running")); // server를 시작할 때 나오는 문구
