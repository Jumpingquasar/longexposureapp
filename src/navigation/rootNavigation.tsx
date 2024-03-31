import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingScreen } from "../screens/auth/onBoarding";
import { LoginScreen } from "../screens/auth/login";
import { RootStackParamList } from "../types/navigation";
import { Home } from "../screens/client/home";
import { getUser } from "../store/authSlice/selectors";
import { Screen } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export enum AppScreens {
  OnBoarding = 'OnBoarding',
  Home = 'Home',
  Login = 'Login',
  Profile = 'Profile'
}

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function RootNavigation() {
  
  const Tab = createBottomTabNavigator();
  const user = getUser();

  return (
    !user.isGuest ? (
      <Tab.Navigator
      screenOptions={{ headerShown: false}}>
        <Tab.Screen name={AppScreens.Home} component={Home} />
        <Tab.Screen name={AppScreens.Profile} component={Home} />
      </Tab.Navigator>
    ) : (
      <Stack.Navigator 
        screenOptions={{ headerShown: false}}
        initialRouteName={AppScreens.OnBoarding}>
        <Stack.Screen name={AppScreens.OnBoarding} component={OnBoardingScreen} />
        <Stack.Screen name={AppScreens.Login} component={LoginScreen} />
      </Stack.Navigator>
    )
  );
}
