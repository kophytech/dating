import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import UserImageComponent from '../../component/UserImageComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {LikeServices} from '../../../Redux/Slice/LikeSlice';
import {showMessage} from 'react-native-flash-message';

const ModalView = ({user}) => {
  const dispatch = useDispatch();

  const LikeUser = id => {
    dispatch(LikeServices(id))
      .unwrap()
      .then(response => {
        showMessage({
          message: 'User Liked Successfullyy',
          type: 'info',
        });
      })
      .catch(error => {
        console.log(error, 'kkkkkkk');
      });
  };

  const onMessage = () => {
    showMessage({
      message: 'You do not have enough credit',
      type: 'info',
    });
  };

  return (
    <View style={styles.ModalViewContainer}>
      <Modal isVisible={true}>
        <View style={{backgroundColor: 'white', top: HP(-10), height: HP(60)}}>
          <View>
            <Image
              source={IMAGE_BODY.splash}
              style={styles.img}
              resizeMode="cover"
            />
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>
                Name :{user?.first_name + ' ' + user?.last_name}
              </Text>
              <Text style={styles.text}>Username : @{user?.username}</Text>
              <Text style={styles.text}>Gender : {user?.gender}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: HP(5),
                width: WP(40),
                alignSelf: 'center',
              }}
            >
              <TouchableOpacity style={styles.message1} onPress={() => {}}>
                <AntDesign name="message1" size={32} color="green" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.love}
                onPress={() => LikeUser(user?.id)}
              >
                <AntDesign name="hearto" size={32} color="white" />
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.dislike}>
                <Ionicons name="heart-dislike-sharp" size={32} color="white" />
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  ModalViewContainer: {},
  container: {
    height: HP(30),
    width: WP(30),
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: WP(6),
  },
  img: {
    width: WP('90%'),
    height: HP(30),
  },
  message1: {
    backgroundColor: 'lightgrey',
    padding: WP(2),
    borderRadius: WP(3.5),
  },
  love: {
    backgroundColor: COLOR.red,
    padding: WP(2),
    borderRadius: WP(3.5),
  },
  dislike: {
    backgroundColor: COLOR.red,
    borderRadius: WP(3),
    padding: WP(2),
  },
});
