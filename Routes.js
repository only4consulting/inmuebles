import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as Screens from './src/screens';

const RootStack = createStackNavigator(
  {
    _splash: Screens.Splash,
    _home: Screens.Home,
    _login: Screens.Login,
    _register: Screens.Register,
    _dashboard: Screens.Dashboard,
    _houseDetail: Screens.HouseDetail,
    _filterResult: Screens.FilterResult
  },
  {
    initialRouteName: '_home',
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
);

export default function Routes(props) {
  return <RootStack />;
}
