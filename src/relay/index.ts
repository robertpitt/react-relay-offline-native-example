import { OfflineStore, Store, Environment, RecordSource } from 'react-relay-offline';
import { Network, FetchFunction } from 'relay-runtime';
export { QueryRenderer } from 'react-relay-offline';
export { graphql } from 'react-relay';

/**
 * Define fetch query
 */
const fetchQuery: FetchFunction = (operation, variables) => {
  console.log('fetching', operation, variables);
  return fetch('https://etmdb.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

/**
 * Network
 */
const network = Network.create(fetchQuery);
export default network;

/**
 * Store
 */
const storeOffline = OfflineStore(network);
const source = new RecordSource(storeOffline);
export const store = new Store(storeOffline, source);

/**
 * Environment
 */
export const environment = new Environment({ network, store }, storeOffline);