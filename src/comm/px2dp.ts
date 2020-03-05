/*
 * @Descripttion:  适配
 * @Author: huangjun
 * @Date: 2020-03-05 15:00:10
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-05 15:00:56
 */

import {Dimensions} from 'react-native';

const basePixelWidth = 375;
const px2dp = (px: number) =>
  (px * Dimensions.get('window').width) / basePixelWidth;

export default px2dp;
