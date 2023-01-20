import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR, HP, WP} from '../../utils/theme';
import RenderItem from './RenderItem';

const NotificationScreen = props => {
  let message = props?.route?.params?.messages?.notificationsData || [];
  return (
    <View>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View style={{flexDirection: 'row'}}>
            <Feather name="arrow-left" size={32} color={COLOR.blackColor} />
            <Text
              style={{
                fontWeight: 'bold',
                color: COLOR.blackColor,

                fontSize: WP(5),
              }}
            >
              Notification
            </Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={message}
          contentContainerStyle={{paddingBottom: WP(30)}}
          renderItem={({item}) => <RenderItem item={item} />}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  subContainer: {
    top: HP(2),
    left: WP(3),
  },
});
