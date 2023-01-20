import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import UserImageComponent from '../../component/UserImageComponent';
import Modal from 'react-native-modal';
import ModalView from './ModalView';
import {useNavigation} from '@react-navigation/native';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import FastImage from 'react-native-fast-image';
import moment from 'moment';

const PeopleList = props => {
  const {people} = props;
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState({});
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: WP(90), paddingLeft: WP(1)}}
        // data={people.slice(0, 10)}

        data={people}
        numColumns={2}
        initialNumToRender={5}
        renderItem={({item}) => {
          console.log('====================================');
          console.log('====================================');
          console.log('====================================');
          console.log('====================================');

          return (
            <TouchableOpacity
              style={styles.peopleContainer}
              onPress={() => navigation.navigate('UserDetails', {item})}
            >
              <View style={styles.img}>
                {/* <UserImageComponent item={item.avater} /> */}
                <FastImage
                  style={styles.image}
                  source={{
                    uri: `${BASE_URL}/${item.avater}`,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
              <View style={styles.name}>
                <Text style={styles.first_name}>{item?.first_name}</Text>
                <Text style={styles.username}>@{item?.username}</Text>
                <Text style={styles.gender}>
                  {' '}
                  {item.gender == '4525' ? 'Male' : 'Female'}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* <View style={{bottom: HP(10)}}>
        <ModalView user={userDetails} />
      </View> */}
    </View>
  );
};

export default PeopleList;

const styles = StyleSheet.create({
  container: {
    top: HP(27),
    backgroundColor: COLOR.whiteColor,
  },
  image: {
    width: WP(40.5),
    height: HP(17),
    bottom: HP(0.7),
    borderRadius: WP(0.2),
  },
  peopleContainer: {
    flexDirection: 'column',
    width: WP(43),
    marginVertical: WP(5),
    elevation: 100,
    shadowColor: 'grey',

    height: HP(30),
    borderColor: COLOR.lightGrey,
    marginHorizontal: WP(1),
    top: 10,
    left: 10,

    borderRadius: WP(2),

    shadowOffset: {
      width: 0,
      height: 1450,
    },
    elevation: 4,
    shadowRadius: 130,
  },
  name: {
    top: HP(2),
    left: WP(5),
    
    maxHeight: WP(40),
  },
  first_name: {
    fontWeight: 'bold',
    color: COLOR.green,
    fontSize: WP(5),
    
  },
  img: {
    alignSelf: 'center',
    top: HP(2),
  },
  username: {
    color: COLOR.blackColor,
    fontWeight: '400',
    maxWidth: WP(37),
    left: WP(0.4),
  },
  gender: {
    textTransform: 'capitalize',
    fontWeight: '300',
    color: 'black',
  },
});
