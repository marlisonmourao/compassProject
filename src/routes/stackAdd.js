import React from "react";
import Status from "../Status";
import Homes from "../screens/Homes";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export function StackAdd() {
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Homes" component={Homes} />
    <Stack.Screen name="Status" component={Status} />
  </Stack.Navigator>

}