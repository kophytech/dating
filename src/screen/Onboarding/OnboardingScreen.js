import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import {Rules} from './Data';
import FormButton from '../../component/FormButton';
import preferences from '../../utils/preferences';

const OnboardingScreen = props => {
  const onSubmit = async () => {
    preferences._setItem('onboarding', '1');
    props.navigation.replace('Auth', {screen: 'Register'});
  };

  return (
    <View contentContainerStyle={{paddingBottom: HP(30)}}>
      <ImageBackground source={IMAGE_BODY.onboarding} style={styles.header} />
      <Image source={IMAGE_BODY.major} style={styles.major} />
      <Text style={styles.headerText}>Welcome to NaijaConnect</Text>
      <Text style={styles.headerText2}>
        Please follow these club rules when {'\n'} using this app.
      </Text>
      <View style={styles.rulesContainer}>
        <FlatList
          data={Rules}
          contentContainerStyle={styles.content}
          numColumns={2}
          horizontal={false}
          renderItem={({item}) => {
            return (
              <View style={{width: WP(45), marginVertical: WP(4)}}>
                <Text style={styles.headerText3}>{item?.header}</Text>
                <Text style={styles.paragraph}>{item?.paragraph}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <FormButton text="I Understand" onPress={() => onSubmit()} />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  header: {
    width: WP(100),
    height: HP(20),
    top: HP(4),
  },
  major: {
    alignSelf: 'center',
    top: HP(8),
    width: WP(40),
    height: HP(4),
  },
  headerText: {
    fontWeight: 'bold',
    top: HP(12),
    textAlign: 'center',
    fontSize: WP(5),
    color: COLOR.blackColor,
  },
  headerText2: {
    fontWeight: '400',
    top: HP(13),
    color: COLOR.blackColor,
    textAlign: 'center',
    fontSize: WP(4),
  },
  rulesContainer: {
    top: HP(15),
    left: WP(5),
    flexDirection: 'row',
  },
  headerText3: {
    fontWeight: 'bold',
    fontSize: WP(3),
    color: COLOR.blackColor,
    fontSize: WP(4),
    left: WP(2),
  },
  content: {
    alignSelf: 'center',
    right: WP(3),
    marginHorizontal: 90,
  },
  paragraph: {
    maxWidth: WP(40),
    borderWidth: 0.4,
    marginVertical: WP(1),
    padding: WP(3),
    color: COLOR.blackColor,
    fontWeight: '400',
    height: HP(11),
    fontSize: WP(3),
    borderRadius: WP(2),
  },
  btnContainer: {
    marginTop: HP(5),
    alignSelf: 'center',
  },
});
