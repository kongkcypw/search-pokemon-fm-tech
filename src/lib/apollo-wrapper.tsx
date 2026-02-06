"use client";

import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs";
import { getApolloOptions } from "./apollo-config";

function makeClient() {
    const options = getApolloOptions();

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: options.link,
    });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}