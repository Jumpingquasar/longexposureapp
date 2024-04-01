import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { Image } from "react-native";
import images from "../constants/images";
import { LoginScreen } from "../screens/auth/login";
import { OnBoardingScreen } from "../screens/auth/onBoarding";
import { Home } from "../screens/client/home";
import { Profile } from "../screens/client/profile";
import { getUser } from "../store/authSlice/selectors";
import { RootStackParamList } from "../types/navigation";

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
      screenOptions={{ headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen options={{
          tabBarIcon: () => (<Image source={images.home}/>),
          }} 
          name={AppScreens.Home} 
          component={Home} 
        />        
        <Tab.Screen options={{
          tabBarIcon: (focused) => (<Image source={images.profile}/>),
          }} 
          name={AppScreens.Profile} 
          component={Profile} 
        />
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
