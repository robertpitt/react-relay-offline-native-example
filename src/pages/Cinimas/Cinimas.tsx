import React, { useState } from 'react';
import { RelayRefetchProp } from "react-relay";
import { Text, ScrollView, RefreshControl, FlatList } from "react-native";
import { Cinimas_entries } from '../../__generated__/Cinimas_entries.graphql';

type Props = {
  entries: Cinimas_entries,
  relay: RelayRefetchProp
}

/**
 * UI
 */
export default (props: Props) => {
  const { relay: { refetch }, entries } = props;
  const [ refreshing, setRefreshing ] = useState(false);
  console.log(props)
  const onRefresh = async () => {
    setRefreshing(true);
    refetch({}, {}, () => setRefreshing(false))
  }
  console.log(entries.edges)
  return (
    <ScrollView refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}>
      <FlatList
        data={entries.edges}
        renderItem={({ item }) => {
          return item && item.node && item.node.id && item.node.hallName ? (
            <Text key={item.node.id}>{item.node.hallName}</Text>
          ): null;
        }}
      />
    </ScrollView>
  )
}