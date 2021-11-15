import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';

const GlobalNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}} initialRouteName="Main">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GlobalNav;
