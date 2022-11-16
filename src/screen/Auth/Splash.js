import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import {HP, IMAGE_BODY} from '../../utils/theme';
import {ImageCarousel, ImageSlider} from 'react-native-image-slider-banner';
import Icon from 'react-native-vector-icons/Entypo';
import FormButton from '../../component/FormButton';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageSlider
        data={[
          {img: IMAGE_BODY.splash},
          {img: IMAGE_BODY.splash2},
          {img: IMAGE_BODY.splash3},
        ]}
        localImg
        autoPlay={true}
        caroselImageStyle={{resizeMode: 'cover'}}
        onItemChanged={item => console.log('item', item)}
        closeIconColor="#fff"
      />
      {/* <ImageBackground
        source={IMAGE_BODY.splash}
        style={styles.image}></ImageBackground> */}
      <Text style={styles.text1}>Naijaconnect</Text>
      <View style={styles.form}>
        <FormButton
          text="Register"
          bg="black"
          onPress={() => navigation.navigate('Register')}
        />
        <FormButton text="Login" onPress={() => navigation.navigate('Login')} />
      </View>
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

    textAlign: 'center',
  },
  form: {
    alignSelf: 'center',
  },
});
