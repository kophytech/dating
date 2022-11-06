import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, HP, WP} from '../utils/theme';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const FormInput = props => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Text style={styles.text}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        autoCapitalize="none"
        onChangeText={props.onChangeText}
      />
      {props.showIcon && (
        <>
          <TouchableOpacity
            style={styles.eye}
            onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? 'eye' : 'eye-off'} />
          </TouchableOpacity>
        </>
      )}
      {props.error && (
        <>
          <Animatable.Text
            animation={'bounceInDown'}
            style={{
              left: WP(5),
              bottom: HP(2),
              color: COLOR.red,
              marginVertical: HP(1),
              maxWidth: WP(80),
            }}>
            {props.error}
          </Animatable.Text>
        </>
      )}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    width: WP(90),
    borderColor: 'blue',
    borderWidth: HP(0.1),
    borderRadius: WP(1),
    padding: HP(2),
    marginBottom: 20,
  },
  text: {
    fontSize: WP(4),
    marginVertical: HP(1.5),
    left: WP(3.5),

    color: 'black',
  },
  eye: {
    alignSelf: 'flex-end',
    right: WP(6),
    bottom: HP(6),
  },
});
