import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {HP, WP} from '../../utils/theme';
import ChatHeader from './ChatHeader';
import {useDispatch} from 'react-redux';
import {chatWithOtherUser} from '../../../Redux/Slice/ChatSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const message = [
  {
    id: 1,
    text: 'Hello, I need friend',
    sender: false,
  },
  {
    id: 2,
    text: 'Hello, I need friendddjabdjbajbjbj akdnkankd jbann',
    sender: false,
  },
  {
    id: 3,
    text: 'Hello, I need friend',
    sender: true,
  },
  {
    id: 4,
    text: 'Hello, I need friend',
    sender: false,
  },
];

const ChatScreen = props => {
  const dispatch = useDispatch();
  const {
    route: {params},
  } = props;

  const [chatList, setChatList] = useState([]);

  console.log('====================================');
  console.log(params?.item?.id, '112323232323');
  console.log('====================================');

  React.useLayoutEffect(() => {
    dispatch(chatWithOtherUser(params?.item?.id))
      .unwrap()
      .then(item => {
        setChatList(item);
      })
      .catch(err => {
        console.log(err, '000');
      });
  }, []);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1, paddingBottom: WP(30)}}
    >
      <View style={{flex: 0.8}}>
        <FlatList
          data={chatList}
          contentContainerStyle={{
            width: WP(90),

            paddingBottom: HP(30),
          }}
          ListHeaderComponent={<ChatHeader item={params?.item} />}
          renderItem={({item}) => {
            return (
              <View style={styles(item)?.message}>
                <Text style={styles(item)?.text}>{item?.text}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{flex: 0.1, top: HP(22)}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: WP(80), left: WP(3)}}>
            <TextInput
              placeholder="Enter Your Message"
              style={{borderWidth: 1}}
            />
          </View>
          <TouchableOpacity style={{left: WP(10), top: HP(2)}}>
            <Ionicons name="ios-send" size={32} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ChatScreen;

const styles = props =>
  StyleSheet.create({
    message: {
      alignSelf: props.sender ? 'flex-end' : 'flex-start',
      left: WP(3),
      top: HP(6),
    },
    text: {
      textAlign: props.sender ? 'right' : 'left',
      backgroundColor: props.sender ? 'green' : 'yellow',
      maxWidth: WP(45),
      marginVertical: WP(5),
      padding: WP(4),
      borderRadius: WP(60),
      marginLeft: props.sender ? WP(6) : WP(1),
    },

    input: {
      top: HP(10),
      borderWidth: 1,
    },
  });
