import Cinimas from './Cinimas';
import { createRefetchContainer, graphql } from 'react-relay';

export default createRefetchContainer(Cinimas, {
  entries: graphql`
    fragment Cinimas_entries on CinemaDetailNodeConnection {
      edges {
        node {
          id
          hallName
          slug
          numberOfSeats
        }
      }
    }
  `
}, graphql`
  query CinimasRefetchQuery($before: String! $after: String!) {
    allCinemaDetails(before: $before, after: $after) {
      ...Cinimas_entries
    }
  }
`);
