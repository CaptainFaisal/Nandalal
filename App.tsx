/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register1 from './src/screens/Register1';
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();

const App = () => {
  const user = auth().currentUser;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!user?<Stack.Screen name="Welcome" component={Welcome} />:null}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register1" component={Register1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
