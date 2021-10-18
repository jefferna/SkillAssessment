import React from 'react';

import {TouchableOpacity, Text, View} from 'react-native';

const PostCard = ({item, key, onPress}) => {
  const handlePress = () => {
    onPress(item);
  };

  // console.log('Post Card: ', item);
  return (
    <TouchableOpacity key={key} onPress={handlePress}>
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
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
          }}>
          <View style={{backgroundColor: 'red', width: '50%'}}></View>
          <View
            style={{
              width: '50%',
              flex: 1,
              flexDirection: 'row-reverse',
              paddingLeft: 10,
              paddingTop: 10,
              borderColor: 'gray',
              borderStyle: 'solid',
              borderWidth: 1,
            }}>
            <Text>1234 Comments</Text>
          </View>
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
