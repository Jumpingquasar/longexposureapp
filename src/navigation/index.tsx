

import React from "react";
import { StatusBar } from "react-native";

//@ts-ignore

//@ts-ignore
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./RootNavigation";
import Colors from "../constants/Colors";

export default function Navigation({}) {


  return (
    <NavigationContainer
    >
    <StatusBar
        barStyle={"light-content"}
        backgroundColor={Colors.white}
    />
    <RootNavigation/>
    </NavigationContainer>
  );
}
