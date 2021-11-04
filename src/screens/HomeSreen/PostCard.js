import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {TouchableOpacity, Text, View} from 'react-native';

import IconsAnt from 'react-native-vector-icons/AntDesign';
import IconsEvil from 'react-native-vector-icons/EvilIcons';
import IconsMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsFeather from 'react-native-vector-icons/Feather';

import {getCommentsRequest} from '../../ducks/posts/actionCreators';
import IconsEntypo from 'react-native-vector-icons/Entypo';

import {
  ActionsContainer,
  Touchable,
  PerActionContainer,
  CardContainer,
  ImageContainer,
  PostOwnerContainer,
  PostOwnerName,
  PostBody,
} from './syled';

const PostCard = ({item, key, onPress}) => {
  const handlePress = () => {
    onPress(item);
  };

  const dispatch = useDispatch();

  const {fetchedComments} = useSelector((state) => state.postsReducer);
  useEffect(() => {
    dispatch(getCommentsRequest(item.id));
  }, []);

  const getPostOwnerName = () => {
    return item.id % 2 === 0 ? 'Juan User' : 'Jean User';
  };

  return (
    <CardContainer>
      <PostOwnerContainer>
        <ImageContainer>
          <IconsEntypo name="user" size={20} style={{alignSelf: 'center'}} />
        </ImageContainer>
        <PostOwnerName>{getPostOwnerName()}</PostOwnerName>
      </PostOwnerContainer>
      <Touchable onPress={handlePress}>
        <PostBody>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              textAlign: 'justify',
            }}>
            {item.title}
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: '300',
              textAlign: 'justify',
            }}>
            {item.body}
          </Text>
        </PostBody>
      </Touchable>

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
          <Touchable onPress={handlePress}>
            <Text>{`${fetchedComments.length} Comments`}</Text>
          </Touchable>
        </View>
      </View>
      <ActionsContainer>
        <PerActionContainer>
          <View style={{alignSelf: 'center'}}>
            <IconsAnt name="like2" />
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 11}}>Like</Text>
          </View>
        </PerActionContainer>

        <PerActionContainer>
          <Touchable onPress={handlePress}>
            <View style={{alignSelf: 'center'}}>
              <IconsEvil name="comment" />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 11}}>Comments</Text>
            </View>
          </Touchable>
        </PerActionContainer>

        <PerActionContainer>
          <View style={{alignSelf: 'center'}}>
            <IconsMaterial name="share-outline" />
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 11}}>Share</Text>
          </View>
        </PerActionContainer>

        <PerActionContainer>
          <View style={{alignSelf: 'center'}}>
            <IconsFeather name="send" />
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 11}}>Send</Text>
          </View>
        </PerActionContainer>
      </ActionsContainer>
    </CardContainer>
  );
};
export default PostCard;
