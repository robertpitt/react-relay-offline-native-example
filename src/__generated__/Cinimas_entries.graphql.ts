/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _Cinimas_entries$ref: unique symbol;
export type Cinimas_entries$ref = typeof _Cinimas_entries$ref;
export type Cinimas_entries = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly hallName: string;
            readonly slug: string | null;
            readonly numberOfSeats: number;
        } | null;
    } | null>;
    readonly " $refType": Cinimas_entries$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Cinimas_entries",
  "type": "CinemaDetailNodeConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node as any).hash = '6418b70a05562db82116407b57878d27';
export default node;
