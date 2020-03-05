/*
 * @Descripttion:  rematch状态管理
 * @Author: huangjun
 * @Date: 2020-03-04 14:24:07
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-04 15:12:29
 */
import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import storage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import {RootModel} from './models';
import {models} from './models';

const options = {};
// redux日志
const logger = createLogger({
  predicate: () => __DEV__,
  collapsed: true,
  duration: true,
});
const loading = createLoadingPlugin(options);
// 存储插件
const persistPlugin = createRematchPersist({
  whitelist: ['user'],
  storage,
  throttle: 5000,
  version: 1,
});
export const store = init({
  models,
  redux: {
    middlewares: [logger],
  },
  plugins: [loading, persistPlugin],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
// loadin插件
interface ILoadingPlugin {
  loading: {
    models: RematchRootState<typeof models>;
    effects: Dispatch;
  };
}
export type iRootState = RematchRootState<RootModel> & ILoadingPlugin;
