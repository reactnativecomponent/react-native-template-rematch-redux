/*
 * @Descripttion:  用户model
 * @Author: huangjun
 * @Date: 2020-03-05 14:58:43
 * @Last Modified by:   huangjun
 * @Last Modified time: 2020-03-05 14:58:43
 */
import {Dispatch} from '../store';

export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export type userState = {
  userName: string;
  mobile: string;
};

export const user = {
  state: {
    userName: '',
    mobile: '',
  },
  reducers: {
    login: (state: userState, userInfo: userState) => {
      return {
        ...state,
        ...userInfo,
      };
    },
    logout: () => {
      return {
        userName: '',
        mobile: '',
      };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async loginAsync(userInfo: userState) {
      await delay(2000);
      dispatch.user.login(userInfo);
    },
  }),
};
