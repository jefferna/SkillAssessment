import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconsAnt from 'react-native-vector-icons/Foundation';
import IconFeather from 'react-native-vector-icons/Feather';
import IconsEntypo from 'react-native-vector-icons/Entypo';
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import PostsStackNavigator from './PostsStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const wew = () => {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={PostsStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => <IconsAnt name="home" size={25} />,
        }}
      />
      <Tab.Screen
        name="My Network"
        component={wew}
        options={{
          tabBarIcon: () => <IconsFontAwesome name="users" size={25} />,
        }}
      />
      <Tab.Screen
        name="Post"
        component={wew}
        options={{
          tabBarIcon: () => <IconsEntypo name="squared-plus" size={25} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={wew}
        options={{
          tabBarIcon: () => <IconIonicons name="notifications" size={25} />,
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={wew}
        options={{
          tabBarIcon: () => <IconsEntypo name="suitcase" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
