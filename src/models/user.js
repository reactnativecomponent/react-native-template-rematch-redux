/*
 * @Author: huangjun
 * @Date: 2018-11-28 11:19:36
 * @Last Modified by: huangjun
 * @Last Modified time: 2018-12-03 15:01:33
 */
const asyncDelay = ms => new Promise(r => setTimeout(r, ms));
const user = {
  state: {
    token: null,
    userName: null,
    users: {},
  },
  reducers: {
    login(state, { publicInfo, mobile, token }) {
      if (publicInfo) {
        return {
          ...state,
          token: token,
          users: {
            ...state.users,
            [mobile]: {
              ...state.users[mobile],
              ...publicInfo,
            },
          },
          userName: mobile,
        };
      }
      return {
        ...state,
        token: token,
        userName: mobile,
      };
    },
    logout(state, id) {
      return {
        ...state,
        token: null,
        users: state.users,
      };
    },
  },
  effects: {
    async asyncLogin(mobile, state) {
      await asyncDelay(3000);
      this.login({
        mobile: mobile,
        token: 'asdasd1231231as1d561as1d65a',
      });
    },
  },
};

export default user;
