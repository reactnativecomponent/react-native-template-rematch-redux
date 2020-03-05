/*
 * @Descripttion: loading
 * @Author: huangjun
 * @Date: 2020-03-04 20:51:20
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-05 14:56:31
 */

import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="large" />
  </View>
);

export default Loading;
