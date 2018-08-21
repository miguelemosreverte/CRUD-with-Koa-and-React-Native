import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import Detail from '../screens/Detail';
import Login from '../screens/Login';

export const FeedStack = createStackNavigator({
  Feed: {
    screen: props =><Feed screenProps={props.screenProps} navigation={props.navigation}/>,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  Details: {
    screen: props =><Detail screenProps={props.screenProps} navigation={props.navigation}/>
  },
});

export const Tabs = createMaterialTopTabNavigator({
  Feed: {
    screen: props => <FeedStack screenProps={props.screenProps}/>,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'ADMIN',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = createStackNavigator({
  Tabs: {
    screen: props => <Tabs screenProps={props.screenProps}/>,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
