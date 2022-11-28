import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import FormInput from '../../component/FormInput';
import {HP, COLOR, IMAGE_BODY, WP} from '../../utils/theme';
import FormButton from '../../component/FormButton';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../Redux/Slice/AuthSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  const [errors, setError] = useState({});
  const [messageError, setMessageError] = useState();
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const [value, setValues] = useState({
    email: '',
    password: '',
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
      email: 'required|email',
      password: 'required',
    };

    let validation = new Validator(value, rules, {
      'required.email': 'The Email field is required.',
      'required.password': 'The Password field is required.',
    });

    if (validation.fails()) {
      setloading(false);
      setError(validation.errors.all());
    } else {
      dispatch(
        login({
          identifier: value.email,
          password: value.email,
        }),
      )
        .unwrap()
        .then(async data => {
          const token = await AsyncStorage.setItem('@token', data?.token);
          setloading(false);
          props.navigation.navigate('Bottom');
        })
        .catch(rejectedValueOrSerializedError => {
          setloading(false);
          setMessageError(rejectedValueOrSerializedError.error.message);
        });
    }
  };

  console.log(errors, 'jkjkjjjjj');

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: HP(20)}}
    >
      <View>
        <View style={styles.formContainer}>
          <Image source={IMAGE_BODY.signin} style={styles.img} />
          {/* <Text style={styles.text1}>Let's Sign In</Text> */}

          <FormInput
            label="Email"
            onChangeText={value => handleInputChange('email', value)}
            error={errors.email}
            inputStyle={styles.inputStyle}
          />
          <FormInput
            label="Password"
            name="password"
            onChangeText={value => handleInputChange('password', value)}
            error={errors.password}
            showIcon={true}
            inputStyle={styles.inputStyle}
          />
        </View>
        <View style={styles.signUpContainer}>
          <FormButton
            text="Sign In"
            onPress={() => onSubmit()}
            loading={loading}
            bg={COLOR.lightGrey}
          />
        </View>
        <View style={styles.subButton}>
          <TouchableOpacity
            style={styles.forgot}
            onPress={() => props.navigation.navigate('Register')}
          >
            <Text style={styles.text3}>Click to Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.forgot}
            onPress={() => props.navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.text4}> Forgot Password?</Text>
          </TouchableOpacity>
          {/* <FormButton
            text="Register"
            btnStyle={{width: WP(40)}}
            bg={COLOR.Blue2}
            onPress={() => props.navigation.navigate('Register')}
          /> */}
        </View>

        <Text style={styles.error1}>{messageError}</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
  error1: {
    textAlign: 'center',
    top: HP(-12),
    color: COLOR.red,
    marginVertical: HP(2),
  },
  img: {
    width: WP(60),
    height: HP(30),
    alignSelf: 'center',
  },
  inputStyle: {borderRadius: WP(3), borderColor: COLOR.green},
  register: {
    top: HP(5),
  },
  subButton: {
    flexDirection: 'row',
    width: WP(60),
    alignSelf: 'center',
    right: HP(5),
    justifyContent: 'space-between',
    top: HP(9),
  },
  forgot: {
    left: WP(5),
  },
  text3: {
    color: 'black',
  },
  text4: {
    marginLeft: WP(15),
    color: 'black',
  },
});
