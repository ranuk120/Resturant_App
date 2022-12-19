import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import assets from '../../assets';
import CommonStyles from '../../Common/CommonStyles';

export const FoodListComponent = ({
  title,
  customStyle,
  customTextStyle,
  onPressBtn,
  icon,
  image,
}) => {
  return (
    <TouchableOpacity
      style={[styles.itemStyle, customTextStyle]}
      onPress={onPressBtn}
    >
      <Image style={styles.imageStyle} source={image} />
      <Text style={[styles.textStyle, customTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 12,
    fontFamily: CommonStyles.fontFamily.bold,
  },

  itemStyle: {
    height: 100,
    width: 60,
    backgroundColor: CommonStyles.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 8,
    backgroundColor: CommonStyles.colors.primary,
  },

  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    bottom: 10,
  },
});
