import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View, Text, ScrollView, SafeAreaView} from 'react-native';

import {
  getCommentsRequest,
  getCommentsRequestSuccess,
} from '../../ducks/posts/actionCreators';

import IconsEntypo from 'react-native-vector-icons/Entypo';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import IconsEvil from 'react-native-vector-icons/EvilIcons';
import IconsMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsFeather from 'react-native-vector-icons/Feather';

import {
  CardContainer,
  PostBody,
  PostOwnerContainer,
  ImageContainer,
  PostOwnerName,
  PerActionContainer,
  Touchable,
} from '../HomeSreen/syled';

import {
  PostContainer,
  ReactionsContainer,
  Reactions,
  Comments,
  ActionsContainer,
} from './styled';

import CommentCard from './CommentCard';

const CommentsScreen = ({navigation, route}) => {
  const {post} = route.params;
  const dispatch = useDispatch();

  const {fetchedComments} = useSelector((state) => state.postsReducer);

  const getPostOwnerName = () => {
    return post.id % 2 === 0 ? 'Juan User' : 'Jean User';
  };

  useEffect(() => {
    dispatch(getCommentsRequest(post.id));
  }, []);

  useEffect(() => {
    console.log('fetchedComments: ', fetchedComments);
  }, [fetchedComments]);

  return (
    <ScrollView>
      <PostContainer>
        <PostOwnerContainer>
          <ImageContainer>
            <IconsEntypo name="user" size={20} style={{alignSelf: 'center'}} />
          </ImageContainer>
          <PostOwnerName>{getPostOwnerName()}</PostOwnerName>
        </PostOwnerContainer>
        <View>
          <PostBody>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'justify',
              }}>
              {post.title}
            </Text>

            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                textAlign: 'justify',
              }}>
              {post.body}
            </Text>
          </PostBody>
        </View>
        <ReactionsContainer>
          <Reactions>
            <Text>{`${fetchedComments.length} Comments`}</Text>
          </Reactions>
          <Comments>
            <Text>{`${fetchedComments.length} Comments`}</Text>
          </Comments>
        </ReactionsContainer>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <PerActionContainer>
            <View style={{alignSelf: 'center'}}>
              <IconsAnt name="like2" />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 11}}>Like</Text>
            </View>
          </PerActionContainer>
          <PerActionContainer>
            <View style={{alignSelf: 'center'}}>
              <IconsEvil name="comment" />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 11}}>Comments</Text>
            </View>
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
        </View>
        {fetchedComments.map((item) => {
          return <CommentCard comment={item} />;
        })}
      </PostContainer>
    </ScrollView>
  );
};

export default CommentsScreen;
