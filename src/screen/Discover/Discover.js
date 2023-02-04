import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR, HP, IMAGE_BODY, WP} from '../../utils/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {randomSlice} from '../../../Redux/Slice/RandomSlice';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BASE_URL} from '../../../Redux/Services/ApiServices';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipes from './Swipes';
import {
  GestureHandlerRootView,
  RectButton,
  TextInput,
} from 'react-native-gesture-handler';
import {dislikeServices, LikeServices} from '../../../Redux/Slice/LikeSlice';
import {showMessage} from 'react-native-flash-message';
import {blockUserSlice, PeopleILiked} from '../../../Redux/Slice/ProfileSlice';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Modal from 'react-native-modal';
import FormButton from '../../component/FormButton';
// MaterialCommunityIcons

const Discover = props => {
  const dispatch = useDispatch();
  const [random, setRandom] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setliked] = useState(false);
  const [reportText, setreportText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const renderLeftActions = () => {
    return (
      <RectButton style={{left: 20}}>
        <Swipes item={random[currentIndex + 1]}></Swipes>
      </RectButton>
    );
  };

  const renderRightActions = () => {
    return (
      <RectButton style={{left: 20}}>
        <Swipes item={random[currentIndex + 1]}></Swipes>
      </RectButton>
    );
  };

  React.useEffect(() => {
    dispatch(PeopleILiked())
      .unwrap()
      .then(response => {
        setRandom(response);
      })
      .catch(err => {
        console.log(err, 'error');
      });
  }, []);

  let item = random[currentIndex];

  const nextUser = () => {
    const nextIndex = random.length - 1 == currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  // const onLike = () => {
  //   nextUser();
  // };

  const onLike = () => {
    setLoading(true);
    setliked(true);

    dispatch(LikeServices(item.id))
      .unwrap()
      .then(respnse => {
        setliked(true);
        setLoading(false);
        showMessage({
          message: 'User Liked Succesfully',
          type: 'info',
        });
        nextUser();
      })
      .catch(err => {
        // console.log(err, 'error');

        setliked(true);
        setLoading(false);
      });
  };

  const onDiskLike = items => {
    setLoading(true);
    setliked(false);
    dispatch(dislikeServices(item.id))
      .unwrap()
      .then(response => {
        setliked(false);
        showMessage({
          message: `You Disliked ${item?.username}  Successfully`,
          type: 'danger',
        });
        nextUser();
      })
      .catch(err => {
        console.log(err, 'error');

        setliked(true);
        setLoading(false);
      });
  };

  const onBlockUser = () => {
    dispatch(blockUserSlice(item.id))
      .unwrap()
      .then(response => {
        showMessage({
          message: `${item.first_name} blocked successfully`,
          type: 'info',
        });
        props.navigation.navigate('Bottom');
      })
      .catch(err => {
        showMessage({
          message: `Something went wrong`,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          top: HP(3),
          flexDirection: 'row',
          left: 10,
          justifyContent: 'space-between',
          width: WP(90),
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="chevron-back" size={32} color={'black'} />
        </TouchableOpacity>
        <View>
          {/* <Image source={IMAGE_BODY.main} /> */}
          <Text style={{color: 'black', fontSize: WP(5.5), fontWeight: 'bold'}}>
            Liked
          </Text>
        </View>
        <View>
          <Menu>
            <MenuTrigger>
              <Entypo name="dots-three-vertical" size={28} color={'black'} />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={() => onBlockUser()}>
                <Text style={styles.text}>Block User</Text>
              </MenuOption>
              <MenuOption onSelect={() => setModalVisible(true)}>
                <Text style={styles.text}>Report</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      {random.length > 0 ? (
        <>
          <Swipeable
            friction={1}
            leftThreshold={50}
            rightThreshold={50}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
            onSwipeableOpen={nextUser}
          >
            <Swipes item={item} />
          </Swipeable>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onDiskLike()}
            >
              <FontAwesome name="times" size={27} color="#f06795" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onLike()}>
              <FontAwesome name="heart" size={27} color="#64edcc" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('ChatMessaging', {item})}
            >
              <MaterialCommunityIcons name="message" size={27} color="green" />
            </TouchableOpacity>

            {/* Modal View */}

            <Modal isVisible={modalVisible}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 500,
                  width: 400,
                  right: 30,
                }}
              >
                <TouchableOpacity
                  style={{alignSelf: 'flex-end', marginTop: 10}}
                  onPress={() => setModalVisible(false)}
                >
                  <Entypo name="cross" color={'black'} size={32} />
                </TouchableOpacity>

                <View>
                  <TextInput
                    placeholder="Give Your Reason"
                    style={styles.reason}
                    multiline={true}
                    numberOfLines={51}
                    onChangeText={text => setreportText(text)}
                  />
                </View>
                <View style={{left: 20}}>
                  <FormButton
                    text="Report"
                    disabled={reportText?.length == 0 ? true : false}
                    bg={reportText?.length == 0 ? 'grey' : COLOR.main}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </>
      ) : (
        <View>
          <Text style={{color: 'black', textAlign: 'center', top: 130}}>
            No liked users
          </Text>
        </View>
      )}
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  image: {
    height: HP('65%'),
    width: WP('90%'),
    alignSelf: 'center',
    top: 50,
    borderRadius: 10,
  },
  btn: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 20,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.45,
    elevation: 9,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 30,
    left: 30,
  },
  textPrimary: {
    color: 'white',
    fontSize: 25,
    marginLeft: 10,
  },
  textSecondary: {
    color: 'white',
    marginLeft: 10,
    fontSize: 25,
  },
  textShadows: {
    textShadowColor: 'rgba(0,0,0,0.9)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  text: {color: 'red', left: 10},
  reason: {
    borderWidth: 1,
    left: 1,
    borderColor: 'black',
    height: 230,
    width: 360,
    left: 20,
    top: 30,
    textAlignVertical: 'top',
  },
});
