/*
 * @Author: huangjun
 * @Date: 2018-11-28 14:21:31
 * @Last Modified by: huangjun
 * @Last Modified time: 2018-12-03 15:01:09
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Main' })],
});

@connect(
  state => {
    return {
      user: state.user,
      fetching: state.loading.effects.user.asyncLogin,
    };
  },
  dispatch => ({
    asyncLogin: mobile => dispatch.user.asyncLogin(mobile),
  })
)
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  onLogin = async () => {
    const { fetching, asyncLogin } = this.props;
    await asyncLogin('13265515115');
    console.log(fetching);
    this.props.navigation.dispatch(resetAction);
  };

  onClose = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { fetching } = this.props;
    return (
      <View style={styles.container}>
        {fetching ? <ActivityIndicator /> : <Button title="Login" onPress={this.onLogin} />}
        {!fetching && <Button title="Close" onPress={this.onClose} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;
