import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import {useDispatch} from 'react-redux';
import {PaymentSlice} from '../../../Redux/Slice/ProfileSlice';
import {showMessage} from 'react-native-flash-message';

const ListData = [
  {
    id: 1,
    price: '50',
    image: IMAGE_BODY.bag,
  },

  {
    id: 2,
    price: '100',
    image: IMAGE_BODY.pot,
  },
  {
    id: 3,
    price: '100',
    image: IMAGE_BODY.gold,
  },
];

const Proscreen = props => {
  const dispatch = useDispatch();

  const onSubmit = price => {
    dispatch(
      PaymentSlice({
        price: price,
      }),
    )
      .unwrap()
      .then(item => {
        props.navigation.navigate('SuccessSCreen');
      })
      .catch(err => {
        showMessage({
          message:"Something  Went Wrong",
          type:'danger'
        })
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>BUY CREDIT</Text>
      <View style={styles.subContainer}>
        <View style={styles.ListData}>
          {ListData.map(item => (
            <View style={styles.list}>
              <Image source={item.image} style={styles.img} />
              <Text style={styles.price}>&#8358;{item.price}</Text>
              <TouchableOpacity
                style={styles.pay}
                onPress={() => onSubmit(item.price)}
              >
                <Text style={styles.text}>pay</Text>
              </TouchableOpacity>
            </View>
          ))}
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
    height: HP(40),
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
    marginTop: HP(3),
    alignSelf: 'center',
  },
});
