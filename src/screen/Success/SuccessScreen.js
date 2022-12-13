import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLOR, HP, WP, IMAGE_BODY} from '../../utils/theme';
import FormButton from '../../component/FormButton';

const SuccessScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image source={IMAGE_BODY.sucess} style={styles.img} />
      <Text style={styles.pay}>Payment Successfull</Text>
      <View style={styles.btn}>
        <FormButton text="Ok"  onPress={()=>props.navigation.navigate("Bottom")}/>
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  img: {
    width: WP(20),
    height: HP(10),
    top: 300,
    alignSelf: 'center',
  },
  pay: {
    top: HP(20),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: WP(5),
  },
  btn: {
    top: HP(25),
    alignSelf: 'center',
  },
});
