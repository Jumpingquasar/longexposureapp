import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingScreen } from "../screens/auth/onBoarding";
import { LoginScreen } from "../screens/auth/login";
import { RootStackParamList } from "../types/navigation";
import { Home } from "../screens/client/home";
import { getUser } from "../store/authSlice/selectors";
import { Screen } from "react-native-screens";

export enum AppScreens {
  OnBoarding = 'OnBoarding',
  Home = 'Home',
  Login = 'Login'
}

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function RootNavigation() {

  const user = getUser();

  const INITIAL_ROUTE_NAME = (user.isGuest)
  ? AppScreens.OnBoarding
  : AppScreens.Home

  return (
      <Stack.Navigator 
      screenOptions={{ headerShown: false}}
      initialRouteName={INITIAL_ROUTE_NAME}>
        {!user.isGuest ? (
          <>
            <Stack.Screen name={AppScreens.Home} component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name={AppScreens.OnBoarding} component={OnBoardingScreen} />
            <Stack.Screen name={AppScreens.Login} component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
  );
}
