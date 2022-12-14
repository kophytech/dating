import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, HP, WP} from '../../utils/theme';
import ChatHeader from './ChatHeader';
import {useDispatch, useSelector} from 'react-redux';
import {chatWithOtherUser, sendMessage} from '../../../Redux/Slice/ChatSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ChatScreen = props => {
  const dispatch = useDispatch();
  // const state = useSelector(state => state);
  const [text, setText] = useState('');
  const chatMessages = useSelector(state => state.chat?.chat || []);

  const {
    route: {params},
  } = props;
  const [chatList, setChatList] = useState([]);
  React.useLayoutEffect(() => {
    dispatch(chatWithOtherUser(params?.item?.id))
      .unwrap()
      .then(item => {
        setChatList(item);
      })
      .catch(err => {
        console.log(err, '000');
      });
  }, [text]);

  const onSendMessage = () => {
    dispatch(
      sendMessage({
        to: params?.item?.id,
        text: text,
        sticker: '',
        gif: '',
      }),
    );

    setText('');
  };

  console.log(text, '122345s');
  return (
    <KeyboardAwareScrollView
      // contentContainerStyle={{
      //   paddingBottom: WP(20),
      // }}
    >
      <View style={{flex: 0.8}}>
        <FlatList
          data={chatList}
          contentContainerStyle={{
            width: WP(90),
            paddingBottom: WP(20),
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
      <View style={{flex: 0.1, top: HP(-5)}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: WP(80), left: WP(1)}}>
            <TextInput
              placeholder="Enter Your Message"
              placeholderTextColor="#000"
              value={text}
              style={{
                borderWidth: 1,
                color: COLOR.blackColor,
                borderRadius: WP(2),
                borderColor: COLOR.green,
              }}
              onChangeText={value => setText(value)}
            />
          </View>
          <TouchableOpacity
            style={{left: WP(10), top: HP(2)}}
            disabled={text == '' ? true : false}
            onPress={() => onSendMessage()}
          >
            <Ionicons
              name="ios-send"
              size={32}
              color={text == '' ? COLOR.blackColor : COLOR.green}
            />
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
      color: 'black',
    },

    input: {
      top: HP(10),
      borderWidth: 1,
    },
  });
