/*
 * @Descripttion:  详情
 * @Author: huangjun
 * @Date: 2020-03-04 13:34:17
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-04 14:22:59
 */
import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native-ui-lib';
import {RootNavigation} from '../../configs/router';
import {iRootState, Dispatch} from '../../store';

export default function DetailScreen({
  navigation,
}: {
  navigation: RootNavigation;
}) {
  const user = useSelector((state: iRootState) => state.user);
  const dispatch = useDispatch<Dispatch>();
  const _pressLogout = () => {
    dispatch.user.logout();
    navigation.navigate('Home');
  };
  return (
    <View flex center>
      {user.userName ? (
        <View>
          <Text text60>userName: {user.userName}</Text>
          <Text marginV-12 text60>
            mobile: {user.mobile}
          </Text>
          <Text blue30 text70 onPress={_pressLogout}>
            logout
          </Text>
        </View>
      ) : (
        <Text blue30 text70 onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      )}
      <Text blue30 text70 onPress={() => navigation.navigate('Home')}>
        >toTab1
      </Text>
    </View>
  );
}
