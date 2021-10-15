import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/ducks/store';
import HomeScreen from './src/screens/HomeSreen/HomeScreen';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
