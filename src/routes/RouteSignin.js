import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Signin } from '../screens/Signin';
import Home from './TabBarRoutes';
import AddCard from '../screens/AddCard/index';
import Homes from '../screens/Homes';
import { StackAdd } from './stackAdd'
import Status from '../Status';



const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Homes" component={Homes} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="StackAdd" component={StackAdd} />
    </Stack.Navigator>
  );
}
