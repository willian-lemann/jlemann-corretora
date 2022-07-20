import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri =
  typeof window === "undefined"
    ? process.env.GRAPH_CMS_URL
    : process.env.NEXT_PUBLIC_GRAPH_CMS_URL;

export const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri,
  cache: new InMemoryCache(),
});
