import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {HP, WP} from '../../utils/theme';
import ChatHeader from './ChatHeader';
import {useDispatch} from 'react-redux';
import {chatWithOtherUser} from '../../../Redux/Slice/ChatSlice';

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
  console.log('====================================');
  console.log(params?.item?.id, '112323232323');
  console.log('====================================');

  React.useLayoutEffect(() => {
    dispatch(chatWithOtherUser(8)).then(response => {
      console.log(response);
    });
  }, []);

  return (
    <View>
      {/* <ChatHeader item="" /> */}
      <FlatList
        data={message}
        contentContainerStyle={{
          width: WP(90),

          paddingBottom: HP(30),
        }}
        ListHeaderComponent={<ChatHeader item="" />}
        renderItem={({item}) => {
          return (
            <View style={styles(item).message}>
              <Text style={styles(item).text}>{item.text}</Text>
            </View>
          );
        }}
      />
    </View>
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
  });
