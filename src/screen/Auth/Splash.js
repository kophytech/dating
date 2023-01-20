import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {HP, IMAGE_BODY, WP} from '../../utils/theme';
import {ImageCarousel, ImageSlider} from 'react-native-image-slider-banner';
import Icon from 'react-native-vector-icons/Entypo';
import FormButton from '../../component/FormButton';
import {CommonActions, useNavigation} from '@react-navigation/native';
import preferences from '../../utils/preferences';
import {useDispatch, useSelector} from 'react-redux';
import {profileSlice} from '../../../Redux/Slice/ProfileSlice';

const Splash = () => {
  const country = useSelector(state => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(profileSlice());
  }, [dispatch]);

  useEffect(() => {
    preferences
      ._getItem('onboarding')
      .then(value => {
        if (value == '1') {
          preferences
            ._getItem('user')
            .then(async session => {
              console.log({session});
              if (session) {
                navigation.dispatch({
                  ...CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'Bottom',
                        state: {
                          routes: [
                            {
                              name: 'Bottom',
                            },
                          ],
                        },
                      },
                    ],
                  }),
                });
              } else {
                navigation.dispatch({
                  ...CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'Auth',
                        state: {
                          routes: [
                            {
                              name: 'Login',
                            },
                          ],
                        },
                      },
                    ],
                  }),
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          navigation.navigate('Onboarding');
        }
      })
      .catch(error => {
        console.log(error, '911');
      });
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={IMAGE_BODY.splash0}
        style={{width: WP('100'), height: HP('100%')}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65A612',
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
