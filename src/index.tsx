/*
 * @Descripttion: react-native ts + rematch 模板
 * @Author: huangjun
 * @Date: 2020-03-04 15:26:38
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-05 10:45:19
 */
import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import MainScreen from './pages';
import {store} from './store';

enableScreens();

export default function app() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </Provider>
  );
}
