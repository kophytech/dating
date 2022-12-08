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

const PeopleList = props => {
  const {people} = props;
  const navigation = useNavigation();
  console.log(people, '11111');
  const [userDetails, setUserDetails] = useState({});
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: WP(20)}}
        // data={people.slice(0, 10)}
        data={people}
        numColumns={2}
        initialNumToRender={5}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.peopleContainer}
              onPress={() => navigation.navigate('UserDetails', {item})}
            >
              <View style={styles.img}>
                {/* <UserImageComponent item={item.avater} /> */}
                <FastImage
                  style={{
                    width: WP(60),
                    height: HP(20),
                    bottom: HP(3),
                    borderRadius: WP(13),
                  }}
                  source={{
                    uri: 'https://unsplash.it/400/400?image=1',
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.name}>
                <Text style={styles.first_name}>{item?.first_name}</Text>
                <Text style={styles.username}>@{item?.username}</Text>
                <Text style={styles.gender}> {item.gender}</Text>
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
    left: WP(5),
  },
  peopleContainer: {
    flexDirection: 'column',
    width: WP(45),
    marginVertical: WP(5),
    elevation: 100,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 3,
    borderWidth: 0.4,
    height: HP(30),
    borderColor: COLOR.lightGrey,
    marginHorizontal: WP(4),
    top: 10,
    left: WP(-8),
  },
  name: {
    top: HP(2),
    left: WP(1),
    alignSelf: 'center',
    maxHeight: WP(40),
  },
  first_name: {
    fontWeight: 'bold',
    color: COLOR.blackColor,
    fontSize: WP(5),
  },
  img: {
    alignSelf: 'center',
    top: HP(3),
  },
  username: {
    color: COLOR.blackColor,
    fontWeight: '400',
    maxWidth: WP(30),
    left: WP(0.4),
  },
  gender: {
    textTransform: 'capitalize',
    fontWeight: '300',
  },
});
