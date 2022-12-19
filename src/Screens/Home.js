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
  FlatList,
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
import {FoodListComponent} from '../Navigation/FoodListComponent';
import assets from '../../assets';

const DATA = [
  {
    id: 1,
    title: 'burger',
    image: assets.burger,
  },
  {
    id: 2,
    title: 'donut',
    image: assets.donut,
  },
  {
    id: 3,
    title: 'pizza',
    image: assets.pizza,
  },
  {
    id: 4,
    title: 'bread',
    image: assets.bread,
  },
  {
    id: 5,
    title: 'bun',
    image: assets.bun,
  },
];

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <FoodListComponent title={item.title} image={item.image} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  homeBtnStyle: {
    backgroundColor: CommonStyles.colors.white,
    borderRadius: 50,
    width: 140,
    alignItems: 'center',
    padding: 10,
  },

  homeTextStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.primary,
    fontSize: 30,
  },
});

export default Home;
