/*
 * @Author: huangjun
 * @Date: 2018-11-28 11:00:25
 * @Last Modified by: huangjun
 * @Last Modified time: 2018-12-03 14:50:56
 * @flow
 */
import storage from 'redux-persist/es/storage';
import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import { createLogger } from 'redux-logger';
import utilsMiddleware from './utilsMiddleware';
import user from './user';
import utils from './utils';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});
const persistPlugin = createRematchPersist({
  // whitelist: ['user'],
  storage: storage,
  throttle: 5000,
  version: 1,
});
const loading = createLoadingPlugin();
const store = init({
  models: { user, utils },
  redux: {
    middlewares: [logger, utilsMiddleware],
  },
  plugins: [loading, persistPlugin],
});

export default store;
