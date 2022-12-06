import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationrouts} from '../../Common/enum';
import Splash from '../Screens/Splash';
// import Welcome from '../Screens/Welcome';
import Signup from '../Screens/SignUp';
import DrawerNavigation from './DrawerNavigation';
import SignUp from '../Screens/SignUp';
import Welcome from '../Screens/Welcome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator /* initialRouteName={'Drawer'} */>
        {/* <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name={'Drawer'}
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name={'SignUp'}
          component={SignUp}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
