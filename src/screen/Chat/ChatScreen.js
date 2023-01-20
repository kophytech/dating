import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, HP, WP} from '../../utils/theme';
import ChatHeader from './ChatHeader';
import {useDispatch, useSelector} from 'react-redux';
import {chatWithOtherUser, sendMessage} from '../../../Redux/Slice/ChatSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {updateProfileSlice} from '../../../Redux/Slice/ProfileSlice';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const ChatScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const state = useSelector(state => state);
  const [text, setText] = useState('');
  const chatMessages = useSelector(state => state.chat?.chat || []);
  const {
    route: {params},
  } = props;

  React.useEffect(() => {
    updateLastSeen();
  }, []);

  const updateLastSeen = () => {
    dispatch(
      updateProfileSlice({
        lastseen: Date.now(),
      }),
    )
      .unwrap()
      .then(response => {
        console.log('====================================');
        console.log(response, 'lnakdnkadnk');
        console.log('====================================');
      })
      .catch(error => {
        console.log('====================================');
        console.log(error, 'adee');
        console.log('====================================');
      });
  };

  const backAction = () => {
    updateLastSeen();
    navigation.goBack();
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );

  const [chatList, setChatList] = useState([]);

  React.useEffect(() => {
    dispatch(chatWithOtherUser(params?.item?.id))
      .unwrap()
      .then(item => {
        setChatList(item);
      });
  }, []);

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

  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 0.9}}>
          <FlatList
            data={chatMessages}
            contentContainerStyle={{
              width: WP(90),
              paddingBottom: WP(20),
            }}
            ListHeaderComponent={
              <ChatHeader item={params?.item} lastseen={updateLastSeen} />
            }
            renderItem={({item}) => {
              return (
                <View style={styles(item)?.message}>
                  <Text style={styles(item)?.text}>{item?.text}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{flex: 0.1}}>
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
      </View>
    </>
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
