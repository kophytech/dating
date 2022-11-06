import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import Entypo from 'react-native-vector-icons/Entypo';

const data = [
  {
    id: 1,
    name: 'Emmanuel Omidiora',
    gender: 'Male',
    country: 'Nigeria',
    age: 22,
    about:
      'Hi, I am Adrianne Rico. I am now 22 years old and I am looking for someone to love and care for me seriously....See more',
    image: IMAGE_BODY.splash,
  },
  {
    id: 2,
    name: 'Emmanuel Omidiora',
    gender: 'Male',
    country: 'Nigeria',
    age: 22,
    about:
      'Hi, I am Adrianne Rico. I am now 22 years old and I am looking for someone to love and care for me seriously....See more',
    image: IMAGE_BODY.splash,
  },
  {
    id: 3,
    name: 'Emmanuel Omidiora',
    gender: 'Male',
    country: 'Nigeria',
    age: 22,
    about:
      'Hi, I am Adrianne Rico. I am now 22 years old and I am looking for someone to love and care for me seriously....See more',
    image: IMAGE_BODY.splash,
  },
  {
    id: 4,
    name: 'Emmanuel Omidiora',
    gender: 'Male',
    country: 'Nigeria',
    age: 22,
    about:
      'Hi, I am Adrianne Rico. I am now 22 years old and I am looking for someone to love and care for me seriously....See more',
    image: IMAGE_BODY.splash,
  },
  {
    id: 5,
    name: 'Emmanuel Omidiora',
    gender: 'Male',
    country: 'Nigeria',
    age: 22,
    about:
      'Hi, I am Adrianne Rico. I am now 22 years old and I am looking for someone to love and care for me seriously....See more',
    image: IMAGE_BODY.splash,
  },

  {
    id: 6,
    name: 'Emmanuel Omidiora',
    gender: 'Male',
    country: 'Nigeria',
    age: 22,
    about:
      'Hi, I am Adrianne Rico. I am now 22 years old and I am looking for someone to love and care for me seriously....See more',
    image: IMAGE_BODY.splash,
  },

  {
    id: 7,
    name: 'Emmanuel Omidiora',
    gender: 'Male',
    country: 'Nigeria',
    age: 22,
    about:
      'Hi, I am Adrianne Rico. I am now 22 years old and I am looking for someone to love and care for me seriously....See more',
    image: IMAGE_BODY.splash,
  },
];
const Discover = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          top: HP(3),
          flexDirection: 'row',
          left: 10,
          justifyContent: 'space-between',
          width: WP(95),
        }}>
        <View>
          <Ionicons name="chevron-back" size={32} color={'black'} />
        </View>
        <View>
          {/* <Image source={IMAGE_BODY.main} /> */}
          <Text>Random</Text>
        </View>
        <View>
          <Entypo name="dots-three-vertical" size={28} color={'black'} />
        </View>
      </View>

      <View>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: HP(60), paddingLeft: 11}}
          style={{paddingLeft: 1}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{top: HP(8), width: WP(52), marginTop: WP(3)}}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={{marginVertical: HP(1)}}>{item.name}</Text>
              <Text>Age:{item.age}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  image: {
    height: HP(30),
    width: WP(50),
  },
});
