import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/ducks/store';
import HomeScreen from './src/screens/HomeSreen/HomeScreen';
import PostsStackNavigator from './src/navigations/PostsStackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PostsStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
