/*
 * @Author: huangjun
 * @Date: 2018-11-28 11:04:58
 * @Last Modified by: huangjun
 * @Last Modified time: 2019-07-09 14:23:44
 */

import React from 'react';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigation from './pages/Navigation';
import { Provider } from 'react-redux';
import stores from './models/index';

const onBeforeLift = () => {
  // take some action before the gate lifts
};
const persistor = getPersistor();
const app = () => (
  <Provider store={stores}>
    <PersistGate loading={null} onBeforeLift={onBeforeLift} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);

export default app;
