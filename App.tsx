/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import GlobalNav from './src/Navigation/GlobalNav';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
