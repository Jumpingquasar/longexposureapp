import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoarding } from "../screens/auth/OnBoarding";

export enum AppScreens {
  OnBoarding = 'OnBoarding',
  Home = 'Home',
}

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const INITIAL_ROUTE_NAME = ( !true)
  ? AppScreens.OnBoarding
  : AppScreens.Home

  return (
    <Stack.Navigator        
      screenOptions={{ headerShown: false}}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <Stack.Screen
        name={AppScreens.OnBoarding}
        component={OnBoarding}
      />
    </Stack.Navigator>
  );
}
