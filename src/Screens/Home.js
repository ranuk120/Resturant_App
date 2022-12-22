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
  TextInput,
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
import {FoodListComponent} from '../../Components/FoodListComponent';
import assets from '../../assets';
import {ListData1, ListData2} from '../../Common/SampleData';
import {FeaturedFoodItem} from '../../Components/FeaturedFoodItem';

const Home = ({navigation}) => {
  const [selectedItem, setSelectedItem] = React.useState(1);

  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={ListData2}
        ListHeaderComponent={() => ( */}

      <View style={styles.heading3}>
        <Image
          style={styles.image1Style}
          source={require('../../assets/images/drawericon.png')}
        />
        <View>
          <View style={styles.headertxt2}>
            <View style={styles.headertxt1}>
              <Text>Deliver to</Text>
              <Image
                style={styles.image1Style}
                source={require('../../assets/images/downarrow.png')}
              />
            </View>
            <Text>4102 Pretty View Lane</Text>
          </View>
        </View>
        <Image
          style={styles.image1Style}
          source={require('../../assets/images/man.png')}
        />
      </View>

      <View style={styles.headertxt3}>
        <Text style={styles.txtstyle3}>What would you like to order</Text>
      </View>

      <View style={styles.headertxt4}>
        <TextInput
          style={styles.input}
          placeholder="Find for food or resaurant ..."
        />
        <TouchableOpacity>
          <Image
            style={styles.image1Style}
            source={require('../../assets/images/drawericon1.png')}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={ListData1}
        renderItem={({item}) => (
          <FoodListComponent
            title={item.title}
            image={item.image}
            customStyle={item.id === selectedItem && styles.customStyle}
            customTextStyle={item.id === selectedItem && styles.customTextStyle}
            onPressBtn={() => setSelectedItem(item.id)}
          />
        )}
      />
      <View style={styles.heading2}>
        <Text>Featured Resturants</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All ></Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={ListData2}
        renderItem={({item}) => (
          <FeaturedFoodItem title={item.title} image={item.image} />
        )}
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

  customStyle: {
    backgroundColor: CommonStyles.colors.primary,
  },

  customTextStyle: {
    color: CommonStyles.colors.white,
  },

  heading2: {
    // backgroundColor: 'red',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 50,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
  },

  insidetxt1: {
    position: 'absolute',
  },

  viewAll: {
    color: CommonStyles.colors.primary,
  },

  headertxt1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 75,
    paddingTop: 10,
  },

  headertxt2: {
    alignItems: 'center',
  },

  heading3: {
    flexDirection: 'row',
    width: 470,
    // backgroundColor: 'red',
    justifyContent: 'space-evenly',
    height: 65,
  },

  txtstyle3: {
    fontSize: 30,
  },

  headertxt3: {
    // backgroundColor: 'red',
    width: 300,
    right: 27,
    paddingBottom: 8,
  },

  input: {
    // backgroundColor: 'red',
    width: 260,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878B89',
  },

  headertxt4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    width: '100%',
    right: 20,
    paddingBottom: 8,
  },
});

export default Home;
