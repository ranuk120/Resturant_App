import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../Screens/Welcome';
import SignUp from '../Screens/SignUp';
import {navigationrouts} from '../../Common/Enum';
import MainTabNavigation from './MainTabNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={navigationrouts.Tab_Home}
        component={MainTabNavigation}
      />
      <Drawer.Screen name={'Welcome'} component={Welcome} />
      <Drawer.Screen name={'SignUp'} component={SignUp} />
    </Drawer.Navigator>
  );
}
