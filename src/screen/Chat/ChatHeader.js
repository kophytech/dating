import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR, HP, WP} from '../../utils/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserImageComponent from '../../component/UserImageComponent';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import moment from 'moment';
import {useDispatch} from 'react-redux';

// uri: `${BASE_URL}/${item.avater}`,
const ChatHeader = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log('====================================');
  console.log(moment(4294967295).format('LL'), 'dkd11nkdnkd');

  console.log('====================================');
  console.log(
    moment(
      moment(parseFloat(props?.item?.lastseen)).format('YYYYMMD'),
      'YYYYMMDD',
    ).fromNow(),
    ' moment("20120620", "YYYYMMDD").fromNow(); moment("20120620", "YYYYMMDD").fromNow();',
  );

  // moment("20111031", "YYYYMMDD").fromNow();
  // console.log('====================================');
  // console.log(moment(parseFloat(props?.item?.lastseen)).format('YYYYMMD'));
  // console.log('====================================');
  // console.log(props?.item?.lastseen, 'dkd11nkdnkd');
  //
  return (
    <View style={styles.ChatHeader}>
      <View style={styles.chat}>
        <TouchableOpacity
          onPress={() => {
            props.lastseen();
            navigation.replace('Bottom');
          }}
        >
          <Ionicons
            name="arrow-back-sharp"
            size={32}
            color={COLOR.blackColor}
          />
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
            <Text style={{color: COLOR.blackColor}}>
              Online - Last seen,
              {moment(
                moment(parseFloat(props?.item?.lastseen)).format('YYYYMMD'),
                'YYYYMMDD',
              ).fromNow()}
              {/* {moment(String(props?.item?.lastseen), 'YYYY-MM-DD')} */}
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
