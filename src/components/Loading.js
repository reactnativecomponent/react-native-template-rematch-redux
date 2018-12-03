/*
 * @Author: huangjun
 * @Date: 2018-12-03 15:05:02
 * @Last Modified by:   huangjun
 * @Last Modified time: 2018-12-03 15:05:02
 */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
);

export default Loading;
