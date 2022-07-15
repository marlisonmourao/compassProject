import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Signin} from '../screens/Signin';
import { ShowBottomTabs } from './BottomTabs';
import { DayStory } from '../screens/DayStory';

const {Navigator, Screen} = createNativeStackNavigator();

export default props => (
    <Navigator
        initialRouteName="Signin"
        screenOptions={{headerShown: false}}
    >
        <Screen name="Signin" component={Signin} />
        <Screen name="ShowBottomTabs" component={ShowBottomTabs} />
        <Screen name="DayStory" component={DayStory} />
    </Navigator>
)