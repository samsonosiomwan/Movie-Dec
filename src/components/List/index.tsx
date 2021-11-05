import React from "react";
import { View, Text, FlatList } from "react-native";
import Card from "../Card";
import {styles} from './styles'
import {useRecoilValue} from 'recoil'
import {offlineState} from '../../recoilStore/Atoms'

interface Props {
  title: any;
  content: any;
  navigation:any
}

const List = ({navigation, title, content }:Props) => {
  const offline = useRecoilValue(offlineState);
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList
          data={content}
          horizontal={offline?true:false}
          renderItem={({ item }) => (
            <Card navigation={navigation} item={item} />
          )}
          // keyExtractor={item=>item.id}
        ></FlatList>
      </View>
    </View>
  );
};

export default List;
