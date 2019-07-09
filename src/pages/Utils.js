/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: huangjun
 * @Date: 2018-11-28 14:21:36
 * @Last Modified by: huangjun
 * @Last Modified time: 2019-07-09 17:14:53
 */
import React, { Component } from 'react';
import { View, StyleSheet, Linking, Dimensions, TouchableOpacity } from 'react-native';
import { Button, Text, Modal } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from '../components/Toast';

class Utils extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateModal: false,
      updateUrl: '',
      content: '',
      version: '',
    };
  }
  componentDidMount() {
    // this.checkUpdate();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.toast.id !== nextProps.toast.id) {
      Toast.show(nextProps.toast.text);
    }
  }
  checkUpdate() {
    const { actions } = this.props;
    actions.checkUpdate(result => {
      if (result) {
        this.setState({
          updateUrl: result.appUrl,
          content: result.content,
          showUpdateModal: true,
          version: result.version,
        });
      }
    });
  }
  openUpdate() {
    Linking.openURL(this.state.updateUrl);
  }
  renderContent() {
    if (this.state.content) {
      const c = JSON.parse(this.state.content);
      return c.map(res => (
        <Text style={{ lineHeight: 22 }} key={res}>
          {res}
        </Text>
      ));
    }
    return null;
  }

  render() {
    if (this.state.showUpdateModal) {
      return (
        <Modal
          isOpen={this.state.showUpdateModal}
          style={styles.modal}
          position="center"
          swipeToClose={false}
          backdropPressToClose={false}
        >
          <View
            style={{
              flexDirection: 'row',
              padding: 1,
              justifyContent: 'flex-end',
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, alignItems: 'flex-end' }}
              onPress={() => this.setState({ showUpdateModal: false })}
            >
              <Icon style={{ color: 'red' }} name="ios-close-circle-outline" />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '400' }}>
              有新的版本
              <Text style={{ color: 'red' }}>{this.state.version.substring(0, 5)}</Text>
            </Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 12, paddingTop: 12 }}>{this.renderContent()}</View>
          <View style={{ padding: 12 }}>
            <Button block danger onPress={() => this.openUpdate()}>
              <Text>立即升级</Text>
            </Button>
          </View>
        </Modal>
      );
    }
    return null;
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
  },
  modal: {
    width: width * 0.8,
    borderRadius: 5,
    height: 249,
  },
});

export default Utils;
