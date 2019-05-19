/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { Cinimas_entries$ref } from "./Cinimas_entries.graphql";
export type CinimasRefetchQueryVariables = {
    readonly before: string;
    readonly after: string;
};
export type CinimasRefetchQueryResponse = {
    readonly allCinemaDetails: {
        readonly " $fragmentRefs": Cinimas_entries$ref;
    } | null;
};
export type CinimasRefetchQuery = {
    readonly response: CinimasRefetchQueryResponse;
    readonly variables: CinimasRefetchQueryVariables;
};



/*
query CinimasRefetchQuery(
  $before: String!
  $after: String!
) {
  allCinemaDetails(before: $before, after: $after) {
    ...Cinimas_entries
  }
}

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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CinimasRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCinemaDetails",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CinemaDetailNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Cinimas_entries",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CinimasRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCinemaDetails",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CinemaDetailNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CinemaDetailNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "CinemaDetailNode",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hallName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "slug",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "numberOfSeats",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CinimasRefetchQuery",
    "id": null,
    "text": "query CinimasRefetchQuery(\n  $before: String!\n  $after: String!\n) {\n  allCinemaDetails(before: $before, after: $after) {\n    ...Cinimas_entries\n  }\n}\n\nfragment Cinimas_entries on CinemaDetailNodeConnection {\n  edges {\n    node {\n      id\n      hallName\n      slug\n      numberOfSeats\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ce22859afba1dd7273082fa8538f623e';
export default node;
