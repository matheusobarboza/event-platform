import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4q7md8k3hj901w75qjibrtw/master',
    cache: new InMemoryCache()
})