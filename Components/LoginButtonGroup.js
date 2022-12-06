import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyles from '../Common/CommonStyles';
import {ActionButton} from '../Components/ActionButton';
import {GoogleLogo} from '../src/Icons/GoogleLogo';
import {FbLogo} from '../src/Icons/FbLogo';

export const LoginButtonGroup = () => {
  return (
    <View style={styles.btnContainer}>
      <ActionButton
        title={'FACEBOOK'}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
        icon={<FbLogo />}
      />

      <ActionButton
        title={'GOOGLE'}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
        icon={<GoogleLogo />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  btnStyle: {
    backgroundColor: CommonStyles.colors.white,
    height: CommonStyles.height * 0.065,
    width: CommonStyles.width * 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 28,
    flexDirection: 'row',
    // backgroundColor: 'red',
  },

  btnText: {
    fontFamily: CommonStyles.fontFamily.light,
    color: CommonStyles.colors.black,
    fontSize: 14,
    right: 5,
  },
});
