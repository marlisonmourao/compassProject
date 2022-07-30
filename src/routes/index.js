import React from "react";
 "./BottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";


export default props => (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
)