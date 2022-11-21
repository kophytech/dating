import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {HP, IMAGE_BODY, WP} from '../utils/theme';

const UserImageComponent = ({item}) => {
  return (
    <>
      {item == '' || item == null ? (
        <Image
          source={IMAGE_BODY.avatar}
          style={styles.img1}
          resizeMode="contain"
        />
      ) : (
        <Image source={{uri: item}} />
      )}
    </>
  );
};

export default UserImageComponent;

const styles = StyleSheet.create({
  img1: {
    width: WP(12),
    height: HP(5),
  },
});
