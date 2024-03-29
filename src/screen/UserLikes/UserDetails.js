import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import LikingService from '../../../Redux/Services/LikeServices';
import {showMessage} from 'react-native-flash-message';
import {dislikeServices, LikeServices} from '../../../Redux/Slice/LikeSlice';
import {PeopleILiked} from '../../../Redux/Slice/ProfileSlice';

const UserDetails = props => {
  const PeopleILike = useSelector(state => state?.profile?.peopleILiked);

  const getAge = birthDate =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const dispatch = useDispatch();
  const [liked, setliked] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    route: {
      params: {item},
    },
  } = props;

  const onLike = () => {
    console.log(item.id, '99999');
    setLoading(true);
    setliked(true);
    dispatch(LikeServices(item.id))
      .unwrap()
      .then(respnse => {
        setliked(true);
        setLoading(false);
        showMessage({
          message: 'User Liked Succesfully',
          type: 'green',
        });
        props.navigation.goBack();
      })
      .catch(err => {
        // console.log(err, 'error');

        setliked(true);
        setLoading(false);
      });
  };

  const onDiskLike = items => {
    setLoading(true);
    setliked(false);
    dispatch(dislikeServices(items.id))
      .unwrap()
      .then(response => {
        setliked(false);
        showMessage({
          message: `You Disliked ${item?.username}  Successfully`,
          type: 'danger',
        });
        props.navigation.goBack();
      })
      .catch(err => {
        console.log(err, 'error');

        setliked(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    dispatch(PeopleILiked())
      .unwrap()
      .then(response => {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
      });
  }, []);

  let AlreadyLikedAUser = PeopleILike.some(x => x.id === item.id);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.icon}
      >
        <Ionicons
          name="ios-arrow-back-outline"
          size={32}
          color={COLOR.blackColor}
        />
      </TouchableOpacity>
      <View style={{alignSelf: 'center', bottom: HP(3)}}>
        <FastImage
          style={styles.img}
          source={{
            uri: `${BASE_URL}/${item.avater}`,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        {/* <Image
          source={{uri: `${BASE_URL}/${item?.avater}`}}
          style={styles.img}
        resizeMode="cover"
        /> */}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onDiskLike(item)}>
          <Entypo name="cross" size={22} color={COLOR.blackColor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.heart,
            // liked || (AlreadyLikedAUser == true && {backgroundColor: 'red'}),
          ]}
          onPress={() => onLike()}
        >
          <Entypo
            name={
              liked || AlreadyLikedAUser == true ? 'heart' : 'heart-outlined'
            }
            size={32}
            color={
              liked || AlreadyLikedAUser == true ? COLOR.red : COLOR.blackColor
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ChatMessaging', {item})}
        >
          <MaterialCommunityIcons
            name="message-processing-outline"
            size={32}
            color={COLOR.blackColor}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>
          {item.first_name + ' ' + item.last_name}
        </Text>
        <Text style={styles.gender}>
          {item.gender == '4525' ? 'Male' : 'Female'}, {getAge(item?.birthday)}
        </Text>

        {item?.about && (
          <>
            <View style={{alignSelf: 'center', top: HP(3)}}>
              <Text style={styles.aboutText}>About Me</Text>
              <Text style={styles.aboutText1}>{item?.about}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    width: WP('100%'),
    height: HP(35),
    borderRadius: WP(1),
    top: HP(5),
  },
  iconText: {
    fontWeight: 'bold',
    color: COLOR.blackColor,
    top: HP(2),
    left: WP(4),
    fontSize: WP(4),
  },
  buttonContainer: {
    top: HP(12),
    width: WP(90),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  heart: {
    // backgroundColor: 'lightgrey',
    padding: WP(2),
    borderRadius: 10,
    bottom: HP(1),
  },
  detailContainer: {
    top: HP(15),
    alignSelf: 'center',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: WP(7),
    textAlign: 'center',
  },
  gender: {
    color: 'black',
    fontWeight: '400',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: WP(5),
  },
  icon: {
    marginLeft: WP(3),
    top: HP(1),
    flexDirection: 'row',
  },
  aboutText: {
    color: COLOR.blackColor,
    fontSize: WP(5),
    fontWeight: 'bold',
    left: WP(1),
  },
  aboutText1: {
    color: COLOR.blackColor,
    right: WP(1),
    fontSize: WP(4),
  },
});
