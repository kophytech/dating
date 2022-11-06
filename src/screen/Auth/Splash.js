import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {HP, IMAGE_BODY} from '../../utils/theme';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGE_BODY.splash}
        style={styles.image}></ImageBackground>
      <Text style={styles.text1}>Naijaconnect</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: '70%',
    width: '100%',
    opacity: 0.34,
  },
  text1: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: HP(5),
    top: HP(-19),
    textAlign: 'center',
  },
});
