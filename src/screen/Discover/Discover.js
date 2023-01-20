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
  const [loading, setLoading] = useState(false);
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

  const getAge = birthDate =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  return (
    <View style={styles.container}>
      <View
        style={{
          top: HP(3),
          flexDirection: 'row',
          left: 10,
          justifyContent: 'space-between',
          width: WP(90),
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
          {/* <Entypo name="dots-three-vertical" size={28} color={'black'} /> */}
        </TouchableOpacity>
      </View>

      <View style={{top:30}}>
        <FlatList
          data={random}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: HP(60), paddingLeft: 11}}
          style={{paddingLeft: 1}}
          renderItem={({item}) => (
            console.log(item),
            (
              <TouchableOpacity
                style={{
                  top: HP(8),
                  width: WP(40),
                  marginTop: WP(3),
                  borderWidth: 1,
                  marginHorizontal: 10,
                  padding: 3,
                  height: 250,
                  marginVertical: 30,
                  borderColor: COLOR.lightGrey,
                  borderRadius: 6,
                }}
                onPress={() => props.navigation.navigate('UserDetails', {item})}
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
                  {item.first_name} {item.last_name} {item?.city}
                </Text>
                <Text style={{color: 'black', textTransform: 'capitalize'}}>
                  Gender: {item.gender == '4525' ? 'Male' : 'Female'}
                </Text>
                <Text style={{color: 'black', textTransform: 'capitalize'}}>
                  Age: {getAge(item.birthday)}
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
    height: HP(19),
    width: WP(38.8),
    bottom: 3,
    right: 1,
  },
});
