import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';

const Index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGE_BODY.splash}
        style={styles.image1}
        resizeMode="cover"
      />
      <Text style={styles.name}>{'Omidiora Emmanuel'}</Text>
      <Text style={styles.name}>{'English'}</Text>
      <View>
        <Text>About Me</Text>
        <Text
          style={
            styles.aboutMe
          }>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `}</Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  image1: {
    height: HP(50),
    width: WP('100%'),
  },
  name: {
    fontSize: HP(3),
    color: COLOR.blackColor,
  },
  aboutMe: {
    fontSize: WP(4),
    maxWidth: WP(90),
    left: WP(5),
    color: COLOR.blackColor,
  },
});
