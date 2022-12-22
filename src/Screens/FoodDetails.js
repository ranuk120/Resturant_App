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

const FoodDetails = ({navigation}) => {
  const [selectedItem, setSelectedItem] = React.useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          data={ListData2}
          ListHeaderComponent={() => (
            <FlatList
              //   horizontal
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              data={ListData1}
              renderItem={({item}) => (
                <FoodListComponent
                  title={item.title}
                  image={item.image}
                  customStyle={item.id === selectedItem && styles.customStyle}
                  customTextStyle={
                    item.id === selectedItem && styles.customTextStyle
                  }
                  onPressBtn={() => setSelectedItem(item.id)}
                />
              )}
            />
          )}
          renderItem={({item}) => (
            <FeaturedFoodItem
              title={item.title}
              image={item.image}
              image1={item.image1}
              customStyle={item.id === selectedItem && styles.customStyle}
              customTextStyle={
                item.id === selectedItem && styles.customTextStyle
              }
              onPressBtn={() => setSelectedItem(item.id)}
            />
          )}
        />
      </ScrollView>
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
});

export default FoodDetails;
