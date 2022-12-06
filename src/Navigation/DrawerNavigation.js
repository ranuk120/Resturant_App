import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../Screens/Welcome';
import SignUp from '../Screens/SignUp';
import {navigationrouts} from '../../Common/enum';
import Splash from '../Screens/Splash';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Welcome">
      <Drawer.Screen name={'Splash'} component={Splash} />
      <Drawer.Screen name={'Welcome'} component={Welcome} />
      <Drawer.Screen name={'SignUp'} component={SignUp} />
    </Drawer.Navigator>
  );
}
