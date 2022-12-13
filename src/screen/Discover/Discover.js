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
import {BASE_URL} from '../../../Redux/Services/ApiServices';

const Discover = props => {
  const dispatch = useDispatch();
  const [random, setRandom] = React.useState([]);
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
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="chevron-back" size={32} color={'black'} />
        </TouchableOpacity>
        <View>
          {/* <Image source={IMAGE_BODY.main} /> */}
          <Text style={{color: 'black', fontSize: WP(5.5), fontWeight: 'bold'}}>
            Random
          </Text>
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
            (
              <TouchableOpacity
                style={{top: HP(8), width: WP(52), marginTop: WP(3)}}
              >
                <Image
                  source={{
                    uri: `${BASE_URL}` + '/' + `${item.avater}`,
                  }}
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
