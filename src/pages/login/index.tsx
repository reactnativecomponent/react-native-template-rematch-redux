/*
 * @Descripttion:  登录界面
 * @Author: huangjun
 * @Date: 2020-03-04 13:34:08
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-05 14:58:26
 */
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {View, Text, TextField} from 'react-native-ui-lib';
import {useHeaderHeight} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {RootNavigation} from '../../configs/router';
import {iRootState, Dispatch} from '../../store';
import Loading from '../../components/Loading';

export default function LoginScreen({
  navigation,
}: {
  navigation: RootNavigation;
}) {
  const [userName, setUserName] = useState();
  const [mobile, setMobile] = useState();
  const headerHeight = useHeaderHeight();
  const {loading} = useSelector((state: iRootState) => state);
  const dispatch = useDispatch<Dispatch>();
  // 登录
  const _pressLogin = async () => {
    if (!userName) {
      dispatch.utils.show({
        text: '请输入姓名',
      });
      return;
    }
    if (!mobile) {
      dispatch.utils.show({
        text: '请输入手机号码',
      });
      return;
    }
    await dispatch.user.loginAsync({userName, mobile});
    navigation.popToTop();
  };
  return (
    <View flex bg-white>
      <ScrollView contentContainerStyle={{paddingTop: headerHeight + 200}}>
        <View bg-white paddingH-15>
          <TextField
            text70
            value={userName}
            style={{height: 44}}
            placeholder="请输入用户名"
            onChangeText={val => setUserName(val)}
            enableErrors={false}
          />
          <TextField
            text70
            placeholder="请输入手机号码"
            style={{height: 44}}
            value={mobile}
            onChangeText={val => setMobile(val)}
            enableErrors={false}
          />
        </View>
        <View center>
          {loading.effects.user.loginAsync ? (
            <Loading />
          ) : (
            <Text blue30 text70 marginV-16 onPress={_pressLogin}>
              Login
            </Text>
          )}
          <Text blue30 text70 onPress={() => navigation.pop()}>
            back
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
