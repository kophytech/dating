import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import FormInput from '../../component/FormInput';
import {HP, COLOR, IMAGE_BODY, WP} from '../../utils/theme';
import FormButton from '../../component/FormButton';

const ResetPassword = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={IMAGE_BODY.reset} style={styles.image} />
        </View>
        <Text style={styles.text1}>Create New Password</Text>
        <View style={styles.formContainer}>
          <FormInput label="Password" placeholder="Password" />
          <FormInput label="Password" placeholder=" Confirm Password" />
        </View>
        <View style={styles.signUpContainer}>
          <FormButton text="Sign Up" />
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  text1: {
    fontSize: HP(2.5),
    fontWeight: 'bold',
    textAlign: 'center',

    top: HP(3),
  },
  formContainer: {
    alignSelf: 'center',
    top: HP(1),
  },
  signUpContainer: {
    alignSelf: 'center',
    bottom: HP(5),
  },

  imageContainer: {
    alignSelf: 'center',
  },
  image: {
    width: WP(30),
    height: HP(20),
  },
});
