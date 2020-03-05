/*
 * @Descripttion:  模板示例
 * @Author: huangjun
 * @Date: 2020-03-04 14:13:50
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-04 14:14:11
 */
import * as React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {MainNavigation} from '../../configs/router';

export default function HomeScreen({navigation}: {navigation: MainNavigation}) {
  return (
    <View flex center>
      <Text blue30 text70 onPress={() => navigation.push('Detail')}>
        push
      </Text>
      <Text
        blue30
        text70
        marginT-15
        onPress={() => navigation.navigate('Detail')}>
        toTab2
      </Text>
    </View>
  );
}
