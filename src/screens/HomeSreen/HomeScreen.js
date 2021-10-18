import React, {useEffect} from 'react';
import {Button, ScrollView, Text, SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PostCard from './PostCard';

import constants from '../../api/utils';

import {getPostsRequest} from '../../ducks/posts/actionCreators';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {fetchedData} = useSelector((state) => state.postsReducer);

  const handleCardPress = (post) => {
    navigation.navigate('Comments', {post});
  };

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  if (!fetchedData) {
    return <Text>Empty</Text>;
  }

  const Card = ({item}) => {
    return <PostCard key={item.id} item={item} onPress={handleCardPress} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={fetchedData}
        renderItem={Card}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        updateCellsBatchingPeriod={10}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
