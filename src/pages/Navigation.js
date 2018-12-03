/*
 * @Author: huangjun
 * @Date: 2018-11-28 11:37:21
 * @Last Modified by: huangjun
 * @Last Modified time: 2018-12-03 15:04:42
 */
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, BackHandler, ToastAndroid } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Utils from './Utils';
import { connect } from 'react-redux';
import AppNavigator, { getCurrentScreen } from '../configs/screens';
const { height, width } = Dimensions.get('window');

@connect(
  state => {
    return {
      toast: state.utils.toast,
    };
  },
  dispatch => ({
    invalidToken: () => dispatch.utils.invalidToken(),
    showToast: text => dispatch.todos.showToast(text),
  })
)
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.lastBackPressed = null;
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
  }
  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.nav);
    if (currentScreen !== 'Home' && currentScreen !== 'Login') {
      this.props.dispatch(NavigationActions.back());
      return true;
    } else if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      // 最近2秒内按过back键，可以退出应用。
      // BackAndroid.exitApp();
      return false;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true;
  };
  render() {
    return (
      <View style={styles.bg}>
        <AppNavigator
          ref={v => {
            this.navigation = v;
          }}
        />
        <Utils />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    height,
    width,
    backgroundColor: 'transparent',
  },
});

export default Navigation;
