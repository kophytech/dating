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
import {useDispatch, useSelector} from 'react-redux';
import {step1Material, step2Material} from '../../../Redux/Slice/StepSlice';
import FlashMessage from 'react-native-flash-message';
import {getCountry} from '../../../Redux/Slice/ProfileSlice';

const Step1 = props => {
  const [response, setResponse] = React.useState([]);
  const [image, setSmage] = React.useState(false);
  const [type, setType] = React.useState('');
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const state = useSelector(state => state);
 
  React.useEffect(() => {
    dispatch(getCountry());
  }, []);

  const onButtonPress = () => {
    ImagePicker.launchCamera(
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
        type: 'danger',
      });
    } else {
      let value = {...response?.assets};
      console.log('====================================');
      console.log(value);
      console.log('====================================');

      dispatch(
        step2Material({
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
          props.navigation.navigate('Step3');
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
      <View style={{top: HP(4)}}>
        <View style={styles.image}>
          <Image source={IMAGE_BODY.major} />
        </View>
        <Text
          style={{
            color: 'black',
            top: HP(10),
            maxWidth: WP(70),
            textAlign: 'center',
            left: HP(8),
            fontWeight: 'bold',
          }}
        >
          Kindly Take a picture of you to verify your identity
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
          }
        >
          {response?.assets?.length > 0 || image == true ? (
            <View style={styles.imageContainer}>
              <View>
                {response?.assets?.map(item => (
                  <>
                    <Image
                      source={{
                        uri: item?.uri,
                      }}
                      style={{height: HP(30), width: WP(90)}}
                      resizeMode="cover"
                    />
                  </>
                ))}
              </View>
            </View>
          ) : (
            <View>
              <View style={{right: WP(30)}}>
                <Image source={IMAGE_BODY.upload} style={styles.image2} />
              </View>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.btnContainer}>
          {response?.assets?.length > 0 || image == true ? (
            <>
              <MainButton
                text="Continue"
                bg={COLOR.primary}
                onPress={() => onUploadImage()}
                loading={loading}
              />
            </>
          ) : (
            <>
              <MainButton
                text="Take  a picture"
                onPress={() =>
                  onButtonPress(type, {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
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
