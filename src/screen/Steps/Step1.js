import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {use} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';

import MainButton from '../../component/MainButton';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {step1Material} from '../../../Redux/Slice/StepSlice';
import {showMessage} from 'react-native-flash-message';

const Step1 = props => {
  const [response, setResponse] = React.useState([]);
  const [image, setSmage] = React.useState(false);
  const [type, setType] = React.useState('');
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const onButtonPress = () => {
    ImagePicker.launchImageLibrary(
      {
        title: 'Choose an Image',
        base64: true,
        includeBase64: true,
      },
      response => {
        setResponse(response);
      },
    );
    setSmage(true);
  };

  const onUploadImage = () => {
    setLoading(true);
    if (response.length == 0) {
      showMessage({
        message: 'Please Upload an image ',
      });
    } else {
      let value = {...response?.assets};

      dispatch(
        step1Material({
          avatar:
            'data' +
            ':' +
            value?.[0]?.type +
            ';' +
            'base64,' +
            value?.[0]?.base64,
        }),
      )
        .unwrap()
        .then(item => {
          props.navigation.navigate('Step2');
          setLoading(false);
        })
        .catch(err => {
          console.log(err, 'error');
          setLoading(false);
        });
    }
  };

  //
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: HP(50)}}
    >
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
          }}
        >
          Upload your picture to naijaconnect..
        </Text>
        <TouchableOpacity
          style={styles.section1}
          onPress={() =>
            onButtonPress('capture', {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
              base64: true,
            })
          }
        >
          {response?.assets?.length > 0 || image == true ? (
            <View style={styles.imageContainer}>
              <View>
                {response?.assets?.map((item, index) => (
                  <View key={index}>
                    <Image
                      source={{
                        uri: item?.uri,
                      }}
                      style={{height: HP(20), width: WP(80)}}
                      resizeMode="cover"
                    />
                    {/* <Text style={{maxWidth: WP(50), color: COLOR.blackColor}}>
                      {item?.fileName}
                    </Text> */}
                  </View>
                ))}
              </View>
            </View>
          ) : (
            <View>
              <View style={{right: 100}}>
                <Image source={IMAGE_BODY.upload} style={styles.image2} />
              </View>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.btnContainer}>
          {response?.assets?.length > 0 ? (
            <>
              <MainButton
                text="Continue"
                bg={COLOR.primary}
                loading={loading}
                onPress={() => onUploadImage()}
              />
            </>
          ) : (
            <>
              <MainButton
                text="Upload From Gallery"
                onPress={() =>
                  onButtonPress(type, {
                    mediaType: 'photo',
                    includeBase64: true,
                    maxHeight: 200,
                    maxWidth: 200,
                    base64: true,
                  })
                }
              />
            </>
          )}
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
