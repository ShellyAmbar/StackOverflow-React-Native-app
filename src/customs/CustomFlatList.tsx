import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type flatListProps = {
  rederItem: any;
  numColumns: number;
  data: any;
  keyExtractor: any;
};
const CutomFlatList = (props: flatListProps) => {
  return (
    <View style={styles.LIstBackground}>
      <FlatList
        numColumns={props.numColumns}
        data={props.data}
        keyExtractor={props.keyExtractor}
        renderItem={props.rederItem}
      />
    </View>
  );
};
export default CutomFlatList;
const styles = StyleSheet.create({
  LIstBackground: {
    height: '100%',
    width: '100%',
    paddingTop: 20,

    flex: 1,
    // backgroundColor: '#ffff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
