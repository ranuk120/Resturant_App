import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CommonStyles from '../Common/CommonStyles';

export const CustomTextInput = ({
  title,
  props,
  icon,
  onShowPasswordPress,
  secureTextEntry,
}) => {
  return (
    <>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.inputStyles}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={onShowPasswordPress} style={styles.icon}>
          {icon}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: '#dcdee0',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.colors.white,
  },
  titleText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.grey3,
    marginVertical: 12,
    /* right: 120, */
  },
  inputStyles: {
    height: 65,
    width: 330,
    padding: 20,
    borderRadius: 70,
  },

  icon: {position: 'absolute', right: 20},
});
