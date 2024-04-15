import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

import AddToDo from './src/screens/addToDo';
import Home from './src/screens/Home';


const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="AddToDo" component={AddToDo} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
