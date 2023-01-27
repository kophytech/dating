import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Discover from './Discover';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import {COLOR, HP, WP} from '../../utils/theme';

const Swipes = ({item}) => {
  const getAge = birthDate =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  return (
    <View>
      <View>
        <Image
          source={{
            uri: `${BASE_URL}` + '/' + `${item?.avater}`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View>
          <View style={styles.textRow}>
            <Text style={[styles.textPrimary, styles.textShadows]}>
              {item?.first_name}
            </Text>
            <Text style={[styles.textPrimary, styles.textShadows]}>
              {item?.last_name}
            </Text>
          </View>
          <View style={styles.textRow}>
            <Text style={[styles.textPrimary, styles.textShadows]}>
              Age: {getAge(item?.birthday)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Swipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  image: {
    height: HP('65%'),
    width: WP('90%'),
    alignSelf: 'center',
    top: 50,
    borderRadius: 10,
  },
  btn: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 50,
  },
  button: {
    width: 50,
    height: 59,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.45,
    elevation: 9,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 30,
    left: 30,
  },
  textPrimary: {
    color: 'white',
    fontSize: 25,
    marginLeft: 10,
  },
  textSecondary: {
    color: 'white',
    marginLeft: 10,
    fontSize: 25,
  },
  textShadows: {
    textShadowColor: 'rgba(0,0,0,0.9)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
