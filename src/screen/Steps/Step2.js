import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {use} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';

import MainButton from '../../component/MainButton';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {step1Material} from '../../../Redux/Slice/StepSlice';
import FormInput from '../../component/FormInput';

const Step2 = () => {
  const [response, setResponse] = React.useState([]);
  const [image, setSmage] = React.useState(false);
  const [type, setType] = React.useState('');
  const dispatch = useDispatch();

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
      setSmage(true);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
      setSmage(true);
    }
  }, []);

  const onUploadImage = () => {
    dispatch(step1Material(response));
  };

  //
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: HP(50)}}>
      <View style={{top: HP(10)}}>
        <View style={styles.image}>
          <Image source={IMAGE_BODY.main} />
        </View>

        <FormInput placeholder="Religion" />
        <FormInput placeholder="Religion" />
        <FormInput placeholder="Religion" />
        <FormInput placeholder="Religion" />
        <FormInput placeholder="Religion" />
      </View>
    </ScrollView>
  );
};

export default Step2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.whiteColor,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    bottom: HP(8),
  },
  image2: {
    width: WP(18),
    height: HP(12),
    top: HP(16),
    alignSelf: 'center',
  },
  text1: {
    top: HP(20),
    fontWeight: 'bold',
    right: HP(10),
  },
  btnContainer: {
    alignSelf: 'center',
    top: HP(25),
  },
  imageContainer: {
    top: HP(18),
    alignSelf: 'center',
    right: WP(25),
  },
  section1: {
    alignSelf: 'center',
    left: WP(25),
  },
});
