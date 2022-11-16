import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, HP, WP} from '../utils/theme';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';

const FormButton = props => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.bg && {backgroundColor: props.bg}]}
      onPress={props.onPress}>
      {/* <Text style={styles.text1}>{props.text}</Text> */}
      {props.loading ? (
        <View style={{alignSelf: 'center',top:HP(2)}}>
          <Bubbles size={10} color="white" />
        </View>
      ) : (
        <Text style={styles.text1}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: WP(90),
    height: HP(7),

    top: HP(10),
    backgroundColor: 'red',
    borderRadius: HP(3),
    marginVertical: HP(1),
  },
  text1: {
    textAlign: 'center',
    marginTop: HP(2),
    color: COLOR.whiteColor,
    fontWeight: 'bold',
    fontSize: HP(2.5),
  },
});
