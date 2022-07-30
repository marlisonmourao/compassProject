import React from 'react';
import {Image} from 'react-native';

import ButtonProfile from '../../components/ButtonProfile';
import RoutesProfile from './RoutesProfile';;
import add from '../../assets/icon/add.png';
import home from '../../assets/icon/home.png';
import noFocusedHome from '../../assets/icon/noFocusedHome.png';

import Icon from 'react-native-vector-icons/Feather';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homes from '../screens/Homes';
import { StackAdd } from './stackAdd';

const Tab = createBottomTabNavigator();

export function ShowBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 90,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Homes"
        component={Homes}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <Image source={home} />;
            } else {
              return <Image source={noFocusedHome} />;
            }
          },
        }}
      />

      <Tab.Screen
        name="StackAdd"
        component={StackAdd}
        options={{
          tabBarIcon: ({color}) => <Image source={add} />,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate({name: 'AddCard', params: {isVisible: true}});
          },
        })}
      />

      <Tab.Screen
        name="RoutesProfile"
        component={RoutesProfile}
        options={{
          tabBarIcon: ({color,focused}) => {
            return (
              <ButtonProfile focused={focused} name="list" color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
