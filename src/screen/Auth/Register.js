import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState, useEFfect} from 'react';
import FormInput from '../../component/FormInput';
import {HP, COLOR, IMAGE_BODY} from '../../utils/theme';
import FormButton from '../../component/FormButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {register} from '../../../Redux/Slice/AuthSlice';

Validator.setMessages('en', en);
const Register = props => {
  const [errors, setError] = useState({});
  const [loading, setloading] = useState(false);
  const [backendError, setBackendError] = useState({});

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
    setloading(true);
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
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
      setloading(false);
      setError(validation.errors.all());
    } else {
      dispatch(register(value))
        .unwrap()
        .then(async data => {
          setloading(false);
          const token = await AsyncStorage.setItem('@token', data?.token);
          props.navigation.navigate('Step1');
        })
        .catch(rejectedValueOrSerializedError => {
          setloading(false);
          setBackendError(rejectedValueOrSerializedError);
        });
    }
  };

  console.log('====================================');
  console.log(backendError);
  console.log('====================================');
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: HP(20)}}
    >
      <Image source={IMAGE_BODY.major} style={styles.img} />
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
            password={true}
          />
          <FormInput
            label="Confirm Password"
            onChangeText={value =>
              handleInputChange('password_confirmation', value)
            }
            showIcon={true}
            password={true}
          />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.error}>{backendError?.error?.email}</Text>
          <Text style={styles.error}>{backendError?.error?.username}</Text>
        </View>
        <View style={styles.signUpContainer}>
          <FormButton
            text="Sign Up"
            onPress={() => onSubmit()}
            loading={loading}
          />
        </View>

        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => props.navigation.navigate('Login')}
        >
          <Text style={{color: COLOR.green, fontWeight: 'bold'}}>
            Click to Login
          </Text>
        </TouchableOpacity>
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
    color: COLOR.blackColor,
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
  loginContainer: {
    alignSelf: 'center',
    marginTop: HP(12),
  },
  img: {
    alignSelf: 'center',
    top: HP(5),
  },
  error: {
    color: COLOR.red,
  },
});
