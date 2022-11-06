import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {use} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';

import MainButton from '../../component/MainButton';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {step1Material} from '../../../Redux/Slice/StepSlice';

const Step1 = () => {
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
        <Text
          style={{
            color: 'black',
            top: HP(10),
            maxWidth: WP(70),
            textAlign: 'center',
            left: HP(8),
          }}>
          Flash that sleek smile yours to decorate your profile
        </Text>
        <TouchableOpacity
          style={styles.section1}
          onPress={() =>
            onButtonPress('capture', {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            })
          }>
          {response?.assets?.length > 0 || image == true ? (
            <View style={styles.imageContainer}>
              <View>
                {response?.assets?.map(item => (
                  <>
                    <Image
                      source={{
                        uri: item?.uri,
                      }}
                      style={{height: 100, width: 150}}
                      resizeMode="cover"
                    />
                    <Text style={{maxWidth: WP(50), color: COLOR.blackColor}}>
                      {item?.fileName}
                    </Text>
                  </>
                ))}
              </View>
            </View>
          ) : (
            <View>
              <View style={{right: 100}}>
                <Image source={IMAGE_BODY.upload} style={styles.image2} />
              </View>

              <View>
                <Text style={styles.text1}>OR</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.btnContainer}>
          <MainButton
            text="Upload From Gallery"
            onPress={() =>
              onButtonPress(type, {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              })
            }
          />
          <MainButton text="Continue" bg={COLOR.primary} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.whiteColor,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    top: HP(1),
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
