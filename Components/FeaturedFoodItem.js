import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import assets from '../assets';
import CommonStyles from '../Common/CommonStyles';
import {DeliveryBike} from '../src/Icons/DeliveryBike';

export const FeaturedFoodItem = ({
  title,
  customStyle,
  customTextStyle,
  onPressBtn,
  icon,
  image,
  image1,
}) => {
  return (
    <TouchableOpacity
      style={[styles.itemStyle, customStyle]}
      onPress={onPressBtn}
    >
      <Image style={styles.imageStyle} source={image} />
      <Image
        style={styles.image4Style}
        source={require('../assets/images/rating.png')}
      />
      <Image
        style={styles.image5Style}
        source={require('../assets/images/heart.png')}
      />

      <View style={styles.macstyle1}>
        <Text style={[styles.textStyle, customTextStyle]}>{title}</Text>
        <Image
          style={styles.image1Style}
          source={require('../assets/images/correct.png')}
        />
        {/* <DeliveryBike /> */}
      </View>

      <View style={styles.macstyle2}>
        <Image
          style={styles.image2Style}
          source={require('../assets/images/bike.png')}
        />
        <Text style={styles.textStyle1}>Free Delivery</Text>
        <Image
          style={styles.image3Style}
          source={require('../assets/images/watch.png')}
        />
        <Text style={styles.textStyle2}>10-15 Mins</Text>
      </View>

      <View style={styles.macstyle3}>
        <View style={styles.macstyle4}>
          <Text style={styles.textStyle3}>BURGER</Text>
        </View>
        <View style={styles.macstyle5}>
          <Text style={styles.textStyle3}>CHICKEN</Text>
        </View>
        <View style={styles.macstyle6}>
          <Text style={styles.textStyle3}>FAST FOOD</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontFamily: CommonStyles.fontFamily.bold,
  },

  itemStyle: {
    height: 260,
    width: 334,
    backgroundColor: CommonStyles.colors.white,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 5,
    margin: 8,
    left: 10,
  },

  imageStyle: {
    height: 170,
    width: '100%',
    // borderRadius: 100,
    // bottom: 50,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  image1Style: {
    height: 15,
    width: 15,
    left: 8,
  },
  macstyle1: {
    flexDirection: 'row',
    left: 20,
    paddingTop: 6,
  },

  macstyle2: {
    flexDirection: 'row',
    left: 20,
    paddingTop: 6,
    alignItems: 'center',
  },

  image2Style: {
    height: 15,
    width: 15,
  },

  image3Style: {
    height: 15,
    width: 15,
  },

  textStyle1: {
    paddingLeft: 10,
    paddingRight: 30,
  },

  textStyle2: {
    paddingLeft: 10,
  },

  macstyle4: {
    backgroundColor: '#F6F6F6',
    width: 60,
    height: 22,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    left: 18,
  },

  textStyle3: {
    fontSize: 11,
  },

  macstyle3: {
    flexDirection: 'row',
    paddingTop: 6,
  },

  macstyle5: {
    backgroundColor: '#F6F6F6',
    width: 63,
    height: 22,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    left: 30,
  },

  macstyle6: {
    backgroundColor: '#F6F6F6',
    width: 75,
    height: 22,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    left: 44,
  },

  textStyle3: {
    fontSize: 12,
  },

  image4Style: {
    position: 'absolute',
    right: 233,
    bottom: 195,
  },

  image5Style: {
    position: 'absolute',
    left: 280,
  },
});
