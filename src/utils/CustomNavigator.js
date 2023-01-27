import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CustomNavigator = () => {
  const navigation = useNavigation();

  return {
    navigation,
  };
};

export default CustomNavigator;
