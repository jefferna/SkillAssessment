import React from 'react';

import {Text, View} from 'react-native';

import {CommentContainer} from './styled';

import IconsEntypo from 'react-native-vector-icons/Entypo';

import {
  CardContainer,
  PostBody,
  PostOwnerContainer,
  ImageContainer,
  PostOwnerName,
  PerActionContainer,
  Touchable,
} from '../HomeSreen/syled';

const CommentCard = ({comment}) => {
  const getCommentName = () => {
    return comment.id % 2 === 0
      ? 'Keyboard Warrior One'
      : 'Keyboard Warrior Two';
  };
  return (
    <CommentContainer>
      <ImageContainer>
        <IconsEntypo name="user" size={20} style={{alignSelf: 'center'}} />
      </ImageContainer>
      <View
        style={{
          width: '85%',
          marginHorizontal: 10,
          alignSelf: 'center',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{fontWeight: '700'}}>{getCommentName()}</Text>

          <Text>{comment.body}</Text>
        </View>
      </View>
    </CommentContainer>
  );
};

export default CommentCard;
