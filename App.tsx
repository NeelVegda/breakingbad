/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/rootStore'
import Home from './src/Home/Home';
import Favourite from './src/Favourite/Favourite';

const Stack = createStackNavigator();

const store = configureStore();

function MainStackNavigator() {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false ,headerLeft: ()=> null }}/>
        <Stack.Screen name="Favourite" component={Favourite} options={{ headerShown: false ,headerLeft: ()=> null }}/>
      </Stack.Navigator>
    </Provider>
  );
}

function App(){
  
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
};

export default App;
