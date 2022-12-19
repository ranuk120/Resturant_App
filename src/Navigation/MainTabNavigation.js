import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../Screens/SignUp';
import Splash from '../Screens/Splash';
import Welcome from '../Screens/Welcome';
import {navigationrouts} from '../../Common/Enum';

const Tab = createBottomTabNavigator();

function MainTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigation;
