import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, HP, WP} from '../utils/theme';

const FormButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <Text style={styles.text1}>{props.text}</Text>
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
  },
  text1: {
    textAlign: 'center',
    marginTop: HP(2),
    color: COLOR.whiteColor,
    fontWeight: 'bold',
    fontSize: HP(2.5),
  },
});
