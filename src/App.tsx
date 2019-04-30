import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql } from 'react-relay';
import { environment, QueryRenderer } from './relay';
import { default as Loading } from './components/Loading';

/**
 * Query Definitions
 */
const query = graphql`
  query AppQuery {
    allCinemaDetails(before: "2019-10-04", after: "2018-01-01") {
      edges {
        node {
          slug
          hallName
          createdDate
        }
      }
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
        environment={environment}
        query={query}
        variables={{}}
        LoadingComponent={<Loading />}
        render={({ props, error, retry }) => {
          console.log('QueryRenderer.render:', { props, error, retry });
          return(
            <View style={styles.container}>
              <Text style={styles.welcome}>Welcome to React Offline Native Example!</Text>
              <Text style={styles.instructions}>{JSON.stringify({ props, error, retry })}</Text>
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