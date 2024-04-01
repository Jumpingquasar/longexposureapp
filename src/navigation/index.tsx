import React from "react";
import { StatusBar } from "react-native";

//@ts-ignore

//@ts-ignore
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./rootNavigation";
import Colors from "../constants/colors";

export default function Navigation({}) {


  return (
    <NavigationContainer>   
        {/* App status bar */}
        <StatusBar
            barStyle={"light-content"}
            backgroundColor={Colors.white}
        />
        {/* Navigation root. Handles and stores stack & tab components */}
        <RootNavigation/>
    </NavigationContainer>
  );
}
