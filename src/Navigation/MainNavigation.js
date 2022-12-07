import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationrouts} from '../../Common/Enum';
import Splash from '../Screens/Splash';
import Signup from '../Screens/SignUp';
import SignUp from '../Screens/SignUp';
import Welcome from '../Screens/Welcome';
import Tab_Home from '../../Common/Enum';

import MainTabNavigation from './MainTabNavigation';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Drawer'}>
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Drawer'}
          component={DrawerNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'SignUp'}
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'Tab_Home'}
          component={MainTabNavigation}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name={'Welcome'}
          component={Welcome}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
