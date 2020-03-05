/*
 * @Descripttion:  Toast轻提示
 * @Author: huangjun
 * @Date: 2020-03-05 14:50:55
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-05 14:51:26
 */

import * as React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const toastWidth = width * 0.7;

type ToastProps = {
  timeout?: number;
  text?: string;
  duration?: number;
  style?: StyleProp<ViewStyle>;
  show?: boolean;
  cref?: React.RefObject<any>;
};
type ShowProps = {
  content: string;
  t: number;
};
export interface TostHandlers {
  show(props: ShowProps): void;
}

const Toast: React.RefForwardingComponent<TostHandlers, ToastProps> = (
  props,
  ref,
) => {
  const [fadeAnim] = React.useState(new Animated.Value(0.4));
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState('Toast');
  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  React.useImperativeHandle(ref, () => ({
    // show 就是暴露给父组件的方法
    show: params => {
      const {duration = 100} = props;
      const {content, t} = params;
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
      }).start();

      setShow(true);
      setText(content);

      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration,
        }).start(() => {
          setShow(false);
        });
      }, t - duration);
    },
  }));
  const opacity = {
    opacity: fadeAnim,
  };
  if (!show) {
    return null;
  }
  return (
    <Animated.View style={[styles.container, props.style, opacity]}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
};

export default React.forwardRef(Toast);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: toastWidth,
    left: (width - toastWidth) / 2,
    top: (height - 60) / 2,
    padding: 20,
  },
  text: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 16 * 1.5,
  },
});
