/*
 * @Descripttion:  路由配置
 * @Author: huangjun
 * @Date: 2020-03-04 13:32:40
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-04 15:08:50
 */
import * as React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import HomeScreen from '../pages/home';
import DetailsScreen from '../pages/detail';
import LoginScreen from '../pages/login';

type BottomTabParams = {
  Home: undefined;
  Detail: undefined;
};
export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParams>;
const Tab = createBottomTabNavigator<BottomTabParams>();

function BottomTabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Detail" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

type MainStackParams = {
  Home: undefined;
  Detail: undefined;
};

export type MainNavigation = StackNavigationProp<MainStackParams>;
const Stack = createStackNavigator<MainStackParams>();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabScreens}></Stack.Screen>
      <Stack.Screen name="Detail" component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
type RootStackParams = {
  Main: undefined;
  Login: undefined;
  Home: undefined;
};
export type RootNavigation = StackNavigationProp<RootStackParams>;
const RootStack = createStackNavigator<RootStackParams>();
export default function AppStack() {
  return (
    <RootStack.Navigator
      mode="modal"
      screenOptions={{
        // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        headerShown: false,
      }}>
      <RootStack.Screen
        options={{headerShown: false}}
        name="Main"
        component={MainStack}></RootStack.Screen>
      <RootStack.Screen name="Login" component={LoginScreen}></RootStack.Screen>
    </RootStack.Navigator>
  );
}
