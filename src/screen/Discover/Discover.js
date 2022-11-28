import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {randomSlice} from '../../../Redux/Slice/RandomSlice';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
  const dispatch = useDispatch();
  const [random, setRandom] = useState([]);
  React.useEffect(() => {
    dispatch(randomSlice())
      .unwrap()
      .then(response => {
        setRandom(response);
      })
      .catch(err => {
        console.log(err, 'error');
      });
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          top: HP(3),
          flexDirection: 'row',
          left: 10,
          justifyContent: 'space-between',
          width: WP(95),
        }}
      >
        <View>
          <Ionicons name="chevron-back" size={32} color={'black'} />
        </View>
        <View>
          {/* <Image source={IMAGE_BODY.main} /> */}
          <Text style={{color: 'black', fontSize: WP(6.5)}}>Random</Text>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={28} color={'black'} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={random}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: HP(60), paddingLeft: 11}}
          style={{paddingLeft: 1}}
          renderItem={({item}) => (
            console.log(item, '1111111'),
            (
              <TouchableOpacity
                style={{top: HP(8), width: WP(52), marginTop: WP(3)}}
              >
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
                <Text
                  style={{
                    marginVertical: HP(1),
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {item.first_name} {item.last_name} ({'Nigeria'})
                </Text>
                <Text style={{color: 'black', textTransform: 'capitalize'}}>
                  Gender: {item.gender}
                </Text>
                <Text style={{color: 'black', textTransform: 'capitalize'}}>
                  Verified:{' '}
                  {item.verified == 0 ? (
                    'not yet'
                  ) : (
                    <MaterialIcons name="verified" size={12} />
                  )}
                </Text>
              </TouchableOpacity>
            )
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
