/*
 * @Author: huangjun
 * @Date: 2018-11-28 14:21:24
 * @Last Modified by: huangjun
 * @Last Modified time: 2019-07-09 14:56:20
 */
import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Detail',
  };

  gotoDetail = () => {
    this.props.navigation.push('Detail');
  };

  goBack = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Goto Detail" onPress={this.gotoDetail} />
        <Button title="Go Back" onPress={this.goBack} />
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

export default Detail;
