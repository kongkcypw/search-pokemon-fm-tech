import { ApolloClient } from '@apollo/client';
import { getApolloOptions } from './apollo-config';

const apolloClient = new ApolloClient(getApolloOptions());

export default apolloClient;