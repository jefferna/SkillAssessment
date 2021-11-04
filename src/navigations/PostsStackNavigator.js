import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeSreen/HomeScreen';
import {View} from 'react-native';
import CommentsScreen from '../screens/CommentsScreen/ComentsScreen';

const Stack = createNativeStackNavigator();

const PostsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen component={CommentsScreen} name="Comments" />
    </Stack.Navigator>
  );
};

export default PostsStackNavigator;
