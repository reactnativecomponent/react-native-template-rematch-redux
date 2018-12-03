/*
 * @Author: huangjun
 * @Date: 2018-12-03 15:03:43
 * @Last Modified by: huangjun
 * @Last Modified time: 2018-12-03 15:04:03
 */
const utilsMiddleware = store => next => action => {
  const { payload, error } = action;
  // error handle
  if (error) {
    if (payload.type === 'http') {
      store.dispatch('utils/showToast', `网络连接错误【${payload.res.status}】`);
    } else if (payload.type === 'token' || payload.code === '301' || payload.code === '302') {
      store.dispatch('utils/showToast', payload.msg || payload.message);
      store.dispatch('utils/invalidToken');
    } else {
      store.dispatch('utils/showToast', '请检查网络是否连接');
    }
  }
  return next(action);
};
export default utilsMiddleware;
