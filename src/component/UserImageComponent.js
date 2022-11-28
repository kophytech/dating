import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {HP, IMAGE_BODY, WP} from '../utils/theme';
import {BASE_URL} from '../../Redux/Services/ApiServices';
import FastImage from 'react-native-fast-image';

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
        <FastImage
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        // <Image
        //   source={{uri: `${BASE_URL}/${item}`}}
        //   style={styles.img2}
        //   resizeMode="cover"
        // />
      )}
    </>
  );
};

export default UserImageComponent;

const styles = StyleSheet.create({
  img1: {
    width: WP(12),
    height: HP(15),
  },
  img2: {
    width: WP(40),
    height: HP(10),
  },
});
