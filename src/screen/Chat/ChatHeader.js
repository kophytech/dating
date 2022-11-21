import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR, HP, WP} from '../../utils/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserImageComponent from '../../component/UserImageComponent';
import {useNavigation} from '@react-navigation/native';

const ChatHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.ChatHeader}>
      <View style={styles.chat}>
        <TouchableOpacity onPress={() => navigation.replace('Bottom')}>
          <Ionicons name="arrow-back-sharp" size={32} />
        </TouchableOpacity>
        <View style={styles.details}>
          <UserImageComponent />
          <View style={styles.img}>
            <Text style={styles.name}>Anil</Text>
            <Text>Online - Last seen, 2.02pm</Text>
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
    left: HP(2),
  },
  name: {
    fontWeight: 'bold',
    color: COLOR.blackColor,
  },
});
