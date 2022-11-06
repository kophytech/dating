import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEFfect} from 'react';
import FormInput from '../../component/FormInput';
import {HP, COLOR} from '../../utils/theme';
import FormButton from '../../component/FormButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {register} from '../../../Redux/Slice/AuthSlice';

Validator.setMessages('en', en);
const Register = () => {
  const [errors, setError] = useState({});

  console.log(errors, 'errors123');
  const dispatch = useDispatch();

  const [value, setValues] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    username: '',
    password_confirmation: '',
  });

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    Validator.register(
      'strict',
      value => passwordRegex.test(value),
      'password must contain at least one  letter, number and a special character',
    );
    let rules = {
      firstname: 'required',
      lastname: 'required',
      username: 'required',
      email: 'required|email',
      password: 'required|confirmed|min:6',
    };

    let validation = new Validator(value, rules, {
      'required.firstname': 'The First Name field is required.',
      'required.username': 'The Username field is required.',
      'required.lastname': 'The Last Name Name field is required.',
      'required.email': 'The Email field is required.',
      'required.password': 'The Password field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      dispatch(register(value))
        .unwrap()
        .then(data => {
          console.log(data, '11111');
        })
        .catch(rejectedValueOrSerializedError => {
          console.log(rejectedValueOrSerializedError, 'rejecteddd');
        });
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: HP(20)}}>
      <View>
        <View style={styles.formContainer}>
          <Text style={styles.text1}>Create Your Account.</Text>
          <FormInput
            label="First Name"
            name="firstname"
            onChangeText={value => handleInputChange('firstname', value)}
            error={errors.firstname}
          />
          <FormInput
            label="Last Name"
            onChangeText={value => handleInputChange('lastname', value)}
            error={errors.lastname}
          />

          <FormInput
            label="Username"
            onChangeText={value => handleInputChange('username', value)}
            error={errors.username}
          />
          <FormInput
            label="Email"
            onChangeText={value => handleInputChange('email', value)}
            error={errors.email}
          />
          <FormInput
            label="Password"
            name="password"
            onChangeText={value => handleInputChange('password', value)}
            error={errors.password}
            showIcon={true}
          />
          <FormInput
            label="Confirm Password"
            onChangeText={value =>
              handleInputChange('password_confirmation', value)
            }
            showIcon={true}
          />
        </View>
        <View style={styles.signUpContainer}>
          <FormButton text="Sign Up" onPress={() => onSubmit()} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  text1: {
    fontSize: HP(3),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: HP(3),
  },
  formContainer: {
    alignSelf: 'center',
    top: HP(4),
    marginVertical: HP(3),
  },
  signUpContainer: {
    alignSelf: 'center',
    bottom: HP(5),
  },
});
