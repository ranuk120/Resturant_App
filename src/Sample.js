import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Sample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons name="home" size={30} color="red" />
      <Text style={{fontFamily: 'Heebo-Medium', fontSize: 30}}> Home </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sample;
