import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import MenuListScreen from '../screens/MenuListScreen';

const FeedStack = createNativeStackNavigator();

export default function FeedStackScreen() {
  return (
    <FeedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FeedStack.Screen name="MenuList" component={MenuListScreen} />
      <FeedStack.Screen name="Profile" component={Profile} />
    </FeedStack.Navigator>
  );
}
