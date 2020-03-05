/*
 * @Descripttion:  models
 * @Author: huangjun
 * @Date: 2020-03-05 14:58:58
 * @Last Modified by:   huangjun
 * @Last Modified time: 2020-03-05 14:58:58
 */
import {user} from './user';
import {utils} from './utils';

export interface RootModel {
  user: typeof user;
  utils: typeof utils;
}

export const models: RootModel = {
  user,
  utils,
};
