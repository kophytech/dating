import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR, HP, WP} from '../../utils/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserImageComponent from '../../component/UserImageComponent';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import moment from 'moment';

// uri: `${BASE_URL}/${item.avater}`,
const ChatHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.ChatHeader}>
      <View style={styles.chat}>
        <TouchableOpacity onPress={() => navigation.replace('Bottom')}>
          <Ionicons name="arrow-back-sharp" size={32} />
        </TouchableOpacity>
        <View style={styles.details}>
          <FastImage
            style={styles.img}
            source={{
              uri: `${BASE_URL}/${props?.item?.avater}`,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />

          <View style={styles.nameCon}>
            <Text style={styles.name}>{props?.item?.first_name}</Text>
            <Text>
              Online - Last seen,{' '}
              {moment(props?.item?.lastseen, 'YYYYMMDD').fromNow()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  ChatHeader: {
    marginTop: HP(6),
    left: WP(4),
  },
  chat: {
    flexDirection: 'row',
  },
  details: {
    flexDirection: 'row',
    left: WP(5),
  },
  img: {
    width: WP(10),
    height: HP(5),
    borderRadius: WP(5),
  },
  name: {
    fontWeight: 'bold',
    color: COLOR.blackColor,
  },
  nameCon: {
    left: WP(5),
  },
});
