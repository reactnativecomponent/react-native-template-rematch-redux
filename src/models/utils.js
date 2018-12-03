/*
 * @Author: huangjun
 * @Date: 2018-11-28 11:19:36
 * @Last Modified by: huangjun
 * @Last Modified time: 2018-11-28 11:58:49
 */

const utils = {
  state: {
    toast: {
      text: null,
      timeout: 2000,
      id: null,
    },
    tokenInvalid: {
      id: null,
      isInvalid: false,
    },
  },
  reducers: {
    showToast(state, payload) {
      return {
        ...state,
        toast: {
          ...state.toast,
          id: Date.now(),
          ...payload,
        },
      };
    },
    invalidToken(state) {
      return {
        ...state,
        tokenInvalid: {
          isInvalid: true,
          id: Date.now(),
        },
      };
    },
  },
  effects: {
    toast(text, state) {
      this.show({
        text: text,
        id: Date.now(),
      });
    },
  },
};

export default utils;
