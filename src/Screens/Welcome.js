import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CommonStyles from '../../Common/CommonStyles';
import {ActionButton} from '../../Components/ActionButton';
import {navigationrouts} from '../../Common/Enum';
import {GoogleLogo} from '../Icons/GoogleLogo';
import {FbLogo} from '../Icons/FbLogo';
import {LoginButtonGroup} from '../../Components/LoginButtonGroup';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground
        source={image} resizeMode="cover" style={
          styles.image
        } source={require('../assets/')}
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground> */}
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.bgroundcolor}
      >
        <View style={{position: 'absolute'}}>
          <Text style={styles.maintext1}>Welcome to</Text>
          <Text style={styles.maintext2}>FoodHub</Text>
          <Text style={styles.maintext3}>Your favourite foods delivered</Text>
          <Text style={styles.maintext4}>fast at your door</Text>
        </View>

        {/* <TouchableOpacity
          onPress={() => navigation.navigate(navigationrouts.Screen_1)}
        >
          <Text style={{fontFamily: 'PermanentMarker-Regular', fontSize: 35}}>
            Go to Welcome
          </Text>
        </TouchableOpacity> */}

        <ActionButton
          title={'Skip'}
          onPressBtn={() => navigation.navigate(SignUp)}
          customStyle={styles.skipBtnStyle}
          customTextStyle={styles.skipTextStyle}
        />

        <View style={styles.deviderContainer}>
          <View style={styles.devider} />
          <Text style={styles.deviderText}>sign in with</Text>
          <View style={styles.devider} />
        </View>

        {/* <View style={styles.iconview}>
          <ActionButton
            title={'FACEBOOK'}
            onPressBtn={() => navigation.navigate(navigationrouts.Screen_3)}
            customStyle={styles.fbBtnStyle}
            customTextStyle={styles.fbTextStyle}
            icon={<FbLogo />}
          />

          <ActionButton
            title={'GOOGLE'}
            onPressBtn={() => navigation.navigate(navigationrouts.Screen_3)}
            customStyle={styles.fbBtnStyle}
            customTextStyle={styles.fbTextStyle}
            icon={<GoogleLogo />}
          />
        </View> */}

        <LoginButtonGroup />

        <ActionButton
          title={'Start with email or phone'}
          onPressBtn={() => navigation.navigate(navigationrouts.Screen_3)}
          customStyle={styles.emailPhnBtn}
          customTextStyle={styles.emailphnText}
        />

        <View style={styles.footer}>
          <Text style={styles.footertext}>Already have an account?</Text>
          <ActionButton
            title={'Sign in'}
            onPressBtn={() => navigation.navigate(navigationrouts.Screen_3)}
            customStyle={styles.signinBtn}
            customTextStyle={styles.signinText}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* alignItems: 'center',
    justifyContent: 'center', */
  },

  maintext1: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 42,
    color: CommonStyles.colors.secondary,
    top: 200,
    left: 50,
  },

  maintext2: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 35,
    color: CommonStyles.colors.primary,
    top: 200,
    left: 50,
  },

  maintext3: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 15,
    color: CommonStyles.colors.secondary,
    top: 200,
    left: 50,
    paddingTop: 15,
  },

  maintext4: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 15,
    color: CommonStyles.colors.secondary,
    top: 200,
    left: 50,
  },

  bgroundcolor: {
    flex: 1,
  },

  skipBtnStyle: {
    top: 30,
    left: 300,
    backgroundColor: CommonStyles.colors.white,
    borderRadius: 50,
    width: 70,
    /* height: 30, */
    alignItems: 'center',
    padding: 10,
  },

  skipTextStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.primary,
  },

  fbBtnStyle: {
    width: 139,
    height: 54,
    left: 30,
    top: 491,
    backgroundColor: CommonStyles.colors.white,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fbTextStyle: {
    /* alignItems: 'center',
    justifyContent: 'center', */
  },

  iconview: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 330,
  },

  devider: {
    width: 84,
    borderColor: CommonStyles.colors.white,
    borderWidth: 0.5,
    borderRadius: 300,
    margin: 10,
  },

  deviderContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    top: 470,
  },

  deviderText: {
    fontFamily: CommonStyles.fontFamily.dif1,
    fontSize: 16,
    color: CommonStyles.colors.white,
  },

  emailPhnBtn: {
    width: 315,
    height: 54,
    left: 38,
    top: 620,
    backgroundColor: 'rgba(255, 255, 255, 0.21)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderWidth: 1,
    borderColor: CommonStyles.colors.white,
  },

  emailphnText: {
    fontFamily: CommonStyles.fontFamily.dif1,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 575,
  },

  footertext: {
    color: CommonStyles.colors.white,
  },

  signinText: {
    color: CommonStyles.colors.white,
    textDecorationLine: 'underline',
  },

  signinBtn: {
    paddingLeft: 5,
  },

  loginBtns: {
    marginVertical: 100,
  },

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

export default Welcome;
