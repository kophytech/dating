import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HP} from '../../utils/theme';

const ChatScreen = () => {
  return (
    <View>
      <Text style={{color: 'black', top: HP(23), textAlign: 'center'}}>
        No Chat found!!!!!!!!
      </Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
