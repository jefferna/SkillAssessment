import React from 'react';

import {TouchableOpacity, Text, View} from 'react-native';

const PostCard = ({item, id, onPress}) => {
  const handlePress = () => {
    onPress(id);
  };
  return (
    <TouchableOpacity key={id} onPress={handlePress}>
      <View
        style={{
          marginBottom: 10,
          borderStyle: 'solid',
          borderWidth: 1,
          marginHorizontal: 10,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: '700', textAlign: 'center'}}>
            {item.title}
          </Text>
        </View>
        <View style={{padding: 15}}>
          <Text style={{textAlign: 'center'}}> {item.body}</Text>
        </View>
        <View
          style={{
            height: 30,
            backgroundColor: 'teal',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
          }}>
          <View style={{backgroundColor: 'red', width: '50%'}}></View>
          <View style={{backgroundColor: 'blue', width: '50%'}}></View>
        </View>
        <View
          style={{
            height: 30,
            backgroundColor: 'teal',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
          }}>
          <View style={{backgroundColor: 'green', width: '25%'}}></View>
          <View style={{backgroundColor: 'yellow', width: '25%'}}></View>

          <View style={{backgroundColor: 'green', width: '25%'}}></View>
          <View style={{backgroundColor: 'yellow', width: '25%'}}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PostCard;
