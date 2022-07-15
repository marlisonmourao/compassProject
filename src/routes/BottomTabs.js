import React from "react";
import { Image } from "react-native";

import { Home } from "../screens/Home";
import { ActivityContent } from "../screens/ActivityContent";
import { Profile } from "../screens/Profile";

import add from '../../assets/icon/add.png'
import home from '../../assets/icon/home.png'
import noFocusedHome from '../../assets/icon/noFocusedHome.png'

import Icon  from "react-native-vector-icons/Feather";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export function ShowBottomTabs() {
  return (

    <Tab.Navigator
     screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#FFFFFF",
        height: 90,
        paddingBottom: 5,
        paddingTop: 5,

      },
      tabBarShowLabel: false,
     }}
     
     >
     <Tab.Screen 
        name="ActivityContent" 
        component={ActivityContent}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image source={home}
              />
              )
            } else {
              return <Image source={noFocusedHome} />
            }
          }
        }} 
      />


      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (<
              Image source={add}
              />
              );
          }
        }}

      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <Icon name="list" size={25} color="blue" />;
          }
        }}
        />
    </Tab.Navigator>
  );
}