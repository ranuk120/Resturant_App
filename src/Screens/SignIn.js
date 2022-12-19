import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CommonStyles from '../../Common/CommonStyles';
import {ActionButton} from '../../Components/ActionButton';
import {navigationrouts} from '../../Common/Enum';
import {GoogleLogo} from '../Icons/GoogleLogo';
import {FbLogo} from '../Icons/FbLogo';
import {CustomTextInput} from '../../Components/CustomTextInput';
import {LoginButtonGroup} from '../../Components/LoginButtonGroup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [fullName, setFullName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomTextInput
        title={'Full Name'}
        onChangeText={text => setFullName(text)}
        value={fullName}
      />

      <CustomTextInput
        title={'E-mail'}
        onChangeText={text => setEmail(text)}
        value={Email}
      />

      <CustomTextInput
        title={'Password'}
        onChangeText={text => setPassword(text)}
        value={Password}
      />

      <ActionButton
        title={'SIGN IN'}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
      />

      <LoginButtonGroup />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnStyle: {
    backgroundColor: CommonStyles.colors.primary,
    height: 60,
    width: CommonStyles.width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28.5,
  },

  btnText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.white,
    fontSize: 15,
  },
});

export default SignIn;
