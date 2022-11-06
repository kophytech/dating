import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {WP} from './theme';


export const ErrorDisplay = error => {
  if (Object.keys(error).length > 0) {
    return Object.keys(error).map((key, i) => {
      //
      return (
        <View style={{width: WP(90), top: WP(3)}} key={i}>
          <Text style={{textAlign: 'center', color: 'red'}}>
            {error[key] + '\n'}
          </Text>
        </View>
      );
    });
  } else {
    return;
  }
};


export function acronym(words) {
  if (!words) {
    return '';
  }

  var first_letter = function (x) {
    if (x) {
      return x[0];
    } else {
      return '';
    }
  };

  return words.split(' ').map(first_letter).join('');
}





export const Capitalize=(str)=>{
  return str.charAt(0).toUpperCase() + str.slice(1);
  }
  