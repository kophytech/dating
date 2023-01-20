import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {profileSlice} from '../../../Redux/Slice/ProfileSlice';
import FastImage from 'react-native-fast-image';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import FormButton from '../../component/FormButton';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = props => {
  const getAge = birthDate =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  const dispatch = useDispatch();

  const profile = useSelector(state => state.profile?.profile);

  console.log('====================================');
  console.log(profile);
  console.log('====================================');
  React.useEffect(() => {
    dispatch(profileSlice());
  }, [dispatch]);

  const Logout = async () => {
    const token = await AsyncStorage.removeItem('@token');
    props.navigation.navigate('Auth');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: HP(20)}}
    >
      {/* GoProSCreen */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          left: WP(7),
        }}
      >
        <TouchableOpacity
          style={[styles.goPro, {backgroundColor: COLOR.red}]}
          onPress={() => Logout()}
        >
          <Text style={styles.goProText}>LOGOUT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.goPro}
          onPress={() => props.navigation.navigate('GoProSCreen')}
        >
          <Text style={styles.goProText}>BUY CREDIT</Text>
        </TouchableOpacity>
      </View>
      <View style={{top: HP(40)}}>
        <FastImage
          style={{
            width: WP(50),
            height: HP(25),
            bottom: HP(32),
            borderRadius: WP(35),
            alignSelf: 'center',
            overflow: 'hidden',
          }}
          source={{
            uri: `${BASE_URL}` + '/' + `${profile.avater}`,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.details}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EditProfile')}
            style={[
              styles.goPro,
              {marginVertical: WP(2), top: HP(1), width: WP(30)},
            ]}
          >
            <Text style={[styles.goProText, {textAlign: 'center'}]}>
              EDIT PROFILE
            </Text>
          </TouchableOpacity>
          <View style={styles.hobieContainer}>
            <Text style={styles.header}>About Me</Text>
            <Text style={styles.hobText}>{profile.about}</Text>
          </View>
          <View style={styles.hobieContainer}>
            <Text style={styles.header}>Gender</Text>
            <Text style={styles.hobText}>
              {profile.gender == '4525' ? 'Male' : 'Female'}
            </Text>
          </View>

          <View style={styles.hobieContainer}>
            <Text style={styles.header}>Height</Text>
            <Text style={styles.hobText}>{profile.height}cm</Text>
          </View>

          <View style={styles.hobieContainer}>
            <Text style={styles.header}>Age</Text>
            <Text style={styles.hobText}>{getAge(profile?.birthday)}</Text>
          </View>

          <View style={styles.hobieContainer}>
            <Text style={styles.header}>Status</Text>
            <Text style={styles.hobText}>
              {profile?.status == 1 ? 'Single' : 'Married'}
            </Text>
          </View>

          <View style={styles.hobieContainer}>
            <Text style={styles.header}>Religion</Text>
            {profile?.religion == 1 && (
              <Text style={styles.hobText}>
                {profile?.religion == 1 && 'Muslim'}
              </Text>
            )}
            {profile?.religion == 2 && (
              <Text style={styles.hobText}>
                {profile?.religion == 2 && 'Atheists'}
              </Text>
            )}
            {profile?.religion == 3 && (
              <Text style={styles.hobText}>
                {profile?.religion == 3 && 'Buddhist'}
              </Text>
            )}
            {profile?.religion == 4 && (
              <Text style={styles.hobText}>
                {profile?.religion == 4 && 'Catholic'}
              </Text>
            )}
            {profile?.religion == 5 && (
              <Text style={styles.hobText}>
                {profile?.religion == 5 && 'Christain'}
              </Text>
            )}
            {profile?.religion == 6 && (
              <Text style={styles.hobText}>
                {profile?.religion == 6 && 'Hindu'}
              </Text>
            )}

            {profile?.religion == 7 && (
              <Text style={styles.hobText}>
                {profile?.religion == 7 && 'Jewish'}
              </Text>
            )}

            {profile?.religion == 7 && (
              <Text style={styles.hobText}>
                {profile?.religion == 8 && 'Agnostic'}
              </Text>
            )}

            {profile?.religion == 8 && (
              <Text style={styles.hobText}>
                {profile?.religion == 9 && 'Sikh'}
              </Text>
            )}

            {profile?.religion == 9 && (
              <Text style={styles.hobText}>
                {profile?.religion == 9 && 'Others'}
              </Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  image1: {
    height: HP(30),
    width: WP('100%'),
  },
  name: {
    fontSize: HP(3),
    color: COLOR.blackColor,
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: HP(1),
  },

  name1: {
    fontSize: HP(2),
    color: COLOR.blackColor,
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: HP(1),
    textTransform: 'capitalize',
  },

  name2: {
    fontWeight: '300',
    left: 20,
    marginHorizontal: WP(5),
    fontSize: WP(3),
    maxWidth: WP(70),
  },
  subContanier: {
    left: WP(5),
    marginVertical: HP(4),
  },

  details: {
    borderWidth: 0.1,
    bottom: HP(25),
    elevation: 500,
    height: HP(70),
    width: '100%',
    backgroundColor: COLOR.whiteColor,
    alignSelf: 'center',
    borderRadius: WP(3),
  },
  aboutMe: {
    color: COLOR.blackColor,
    textAlign: 'center',
    top: HP(3),
    maxWidth: WP(80),
    left: WP(7),
  },
  goPro: {
    alignSelf: 'flex-end',
    backgroundColor: COLOR.green,
    right: WP(3),
    width: WP(25),
    top: HP(3),
    padding: WP(2),
    borderRadius: WP(3),
  },
  goProText: {
    color: COLOR.whiteColor,
    textAlign: 'center',
  },
  hobieContainer: {
    top: HP(7),
    left: WP(5),
    marginVertical: WP(2),
  },
  header: {
    color: COLOR.blackColor,
    fontWeight: 'bold',
    fontSize: WP(4),
  },
  hobText: {
    color: COLOR.blackColor,
  },
});
