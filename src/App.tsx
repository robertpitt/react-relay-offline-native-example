import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql } from 'react-relay';
import { environment, QueryRenderer, store, reduxOfflineStore } from './relay';
import { default as Loading } from './components/Loading';
import Cinimas from './pages/Cinimas';
import { RenderProps } from 'react-relay-offline/lib/RelayOfflineTypes';
import { AppQueryResponse } from './__generated__/AppQuery.graphql';

/**
 * Query Definitions
 */
const query = graphql`
  query AppQuery ($before: String! $after: String!) {
    allCinemaDetails(before: $before, after: $after) {
      ...Cinimas_entries
    }
  }
`;

/**
 * Interface Definitions
 */
interface Props {}

/**
 * Component Definition
 */
export default class extends Component<Props> {
  render() {
    return (
      <QueryRenderer
        LoadingComponent={<Loading />}
        environment={environment}
        query={query}
        variables={{ after: "2018-10-04", before: "2018-10-04" }}
        dataFrom={"CACHE_FIRST"}
        render={({ props, cached, error, retry }: { props: AppQueryResponse } & RenderProps) => {
          return (
            <View style={styles.container}>
              {props && <Cinimas entries={props.allCinemaDetails} />}
            </View>
          )
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});