import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, HP, WP} from '../utils/theme';

const MainButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={{
        backgroundColor: props.bg ? props.bg : COLOR.pink,
        width: WP(50),
        padding: HP(2),

        borderRadius: WP(3),
        marginVertical: HP(3),
        borderWidth: 1,
        borderColor: props.borderColor ? props.borderColor : 'transparent',
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: props.color ? props.color : COLOR.whiteColor,
          fontWeight: '300',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLOR.pink,
    width: WP(50),
    padding: HP(2),
    alignSelf: 'center',
    borderRadius: WP(3),
    marginVertical: HP(3),
  },
});
