/*
 * @Descripttion: react-native ts + rematch 模板
 * @Author: huangjun
 * @Date: 2020-03-04 15:26:38
 * @Last Modified by: huangjun
 * @Last Modified time: 2020-03-05 14:55:52
 */
import * as React from 'react';
import Stack from '../configs/router';
import {View} from 'react-native-ui-lib';
import Toast from '../components/Toast';
import {TostHandlers} from '../components/Toast';
import {iRootState} from '../store';
import {useSelector} from 'react-redux';

export default function MainScreen() {
  const childRef = React.useRef<TostHandlers>(null);
  const utils = useSelector((state: iRootState) => state.utils);
  // const dispatch = useDispatch<Dispatch>();

  React.useEffect(() => {
    let toastId: any = null;
    if (toastId !== utils.toast.id) {
      toastId = utils.toast.id;
      childRef.current?.show({
        content: utils.toast.text,
        t: utils.toast.timeout,
      });
    }
  }, [utils.toast]);
  return (
    <View flex>
      <Stack />
      <Toast ref={childRef} />
    </View>
  );
}
