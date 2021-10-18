import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View, Text, ScrollView} from 'react-native';

import {
  getCommentsRequest,
  getCommentsRequestSuccess,
} from '../../ducks/posts/actionCreators';

const CommentsScreen = ({navigation, route}) => {
  const {post} = route.params;
  const dispatch = useDispatch();

  const {fetchedComments} = useSelector((state) => state.postsReducer);
  useEffect(() => {
    dispatch(getCommentsRequest(post.id));
  }, []);

  return (
    <View>
      <View
        style={{
          marginBottom: 10,
          borderStyle: 'solid',
          borderWidth: 1,
          marginHorizontal: 10,
        }}>
        <Text>{post.title}</Text>
        <Text style={{paddingTop: 10}}>{post.body}</Text>
      </View>
    </View>
  );
};

export default CommentsScreen;
