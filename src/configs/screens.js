/*
 * @Author: huangjun
 * @Date: 2018-12-03 15:04:56
 * @Last Modified by:   huangjun
 * @Last Modified time: 2018-12-03 15:04:56
 */
import {
  createStackNavigator,
  createBottomTabNavigator,
  TabBarBottom,
  createAppContainer,
} from 'react-navigation';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Account from '../pages/Account';
import Detail from '../pages/Detail';

const HomeNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Account: { screen: Account },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
  }
);
HomeNavigator.navigationOptions = ({ navigation }) => {
  let title;
  const focusedRouteName = navigation.state.routes[navigation.state.index].routeName;
  if (focusedRouteName === 'Home') {
    // of course in this case it's the same, but do whatever you want here
    title = 'Home';
  } else if (focusedRouteName === 'Account') {
    title = 'Account';
  }

  return {
    title,
  };
};

const MainNavigator = createStackNavigator({
  HomeNavigator: { screen: HomeNavigator },
  Detail: { screen: Detail },
});

const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentScreen(route);
  }
  return route.routeName;
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state);
}

export default createAppContainer(AppNavigator);
