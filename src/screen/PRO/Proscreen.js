import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMembershipPriceSlice,
  PaymentSlice,
  PaystackSlice,
} from '../../../Redux/Slice/ProfileSlice';
import {showMessage} from 'react-native-flash-message';

import {WebView} from 'react-native-webview';

const Proscreen = props => {
  const dispatch = useDispatch();

  const [listofCredit, setlistofCredit] = useState({});
  const [selectPlan, setSelectPlan] = useState({});

  console.log('====================================');
  console.log(selectPlan?.public_key, '123');
  console.log('====================================');

  React.useEffect(() => {
    dispatch(getMembershipPriceSlice())
      .unwrap()
      .then(creditSlice => {
        setlistofCredit(creditSlice);
      });
  }, []);

  const onSubmit = data => {
    dispatch(PaystackSlice(data))
      .unwrap()
      .then(item => {
        setSelectPlan(item);
      })
      .catch(err => {
        showMessage({
          message: 'Something  Went Wrong',
          type: 'danger',
        });
      });
  };

  if (Object.keys(selectPlan).length > 0) {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: 'https://checkout.paystack.com/tk81m1jwys4652x'}}
        />
      </View>
    );
  }

  console.log('====================================');
  console.log(selectPlan);
  console.log('====================================');
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: WP(80)}}
    >
      <Text style={styles.headerText}>BUY CREDIT</Text>
      <View style={styles.subContainer}>
        <View style={styles.ListData}>
          <View style={styles.list}>
            <Text style={styles.header}>Monthly Plan</Text>
            <Image source={IMAGE_BODY.bag} style={styles.img} />
            <Text style={styles.price}>
              &#8358;{listofCredit?.monthly_pro_plan}
            </Text>
            <TouchableOpacity
              style={styles.pay}
              onPress={() => onSubmit('monthly_pro_plan')}
            >
              <Text style={styles.text}>pay</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ListData}>
          <View style={styles.list}>
            <Text style={styles.header}>Yearly Plan</Text>
            <Image source={IMAGE_BODY.pot} style={styles.img} />
            <Text style={styles.price}>
              &#8358;{listofCredit?.anually_pro_plan}
            </Text>
            <TouchableOpacity
              style={styles.pay}
              onPress={() => onSubmit('anually_pro_plan')}
            >
              <Text style={styles.text}>pay</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ListData}>
          <View style={styles.list}>
            <Image source={IMAGE_BODY.gold} style={styles.img} />
            <Text style={styles.price}>
              &#8358;{listofCredit?.chest_of_credits?.price}
            </Text>
            <TouchableOpacity
              style={styles.pay}
              onPress={() => onSubmit(listofCredit?.chest_of_credits?.price)}
            >
              <Text style={styles.text}>pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Proscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    color: COLOR.blackColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: WP(5),
    top: HP(4),
  },
  subContainer: {
    top: HP(10),
    left: WP(2),
  },
  ListData: {flexDirection: 'column'},
  list: {
    borderWidth: 1,
    padding: WP(10),
    marginHorizontal: WP(3),
    width: WP(80),
    marginVertical: WP(3),
    alignSelf: 'center',
    height: HP(42),
  },
  img: {
    width: WP(35),
    height: HP(15),
    alignSelf: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: WP(7),
    top: HP(3),
    textAlign: 'center',
  },
  text: {
    fontSize: WP(5),
    marginTop: HP(5),
    color: COLOR.green,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 0.5,
    height: WP(10),
    width: WP(35),
    borderRadius: WP(3),
  },
  pay: {
    marginBottom: HP(1),
    alignSelf: 'center',
  },
  header: {
    bottom: HP(4),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: WP(7),
    color: COLOR.green,
  },
});
