import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from '../../screen/Discover/Discover';
import People from '../../screen/People/People';
import Index from '../../screen/Profile/Index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR, IMAGE_BODY, WP} from '../../utils/theme';
import {Image, Text} from 'react-native';
import ChatScreen from '../../screen/Chat/ChatScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ChatStack from '../Stack/ChatStack';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-deck-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 20,
            elevation: 30,
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="People"
        component={People}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? COLOR.green : COLOR.blackColor}}>
              People
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <Entypo name="location-pin" size={32} color={COLOR.green} />
            ) : (
              <EvilIcons name="location" size={32} color={COLOR.blackColor} />
            ),
        }}
      />

      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? COLOR.green : COLOR.blackColor}}>
              Discover
            </Text>
          ),

          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <MaterialCommunityIcons
                name="cards-heart"
                size={32}
                color={COLOR.green}
              />
            ) : (
              //
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={32}
                color={COLOR.green}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          // tabBarLabel: 'Message',
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? COLOR.green : COLOR.blackColor}}>
              Message
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <Ionicons name="chatbox-ellipses" size={32} color={COLOR.green} />
            ) : (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={32}
                color={COLOR.green}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Index}
        options={{
          // tabBarLabel: 'Profile',
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? COLOR.green : COLOR.blackColor}}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <Ionicons name="person" size={size} color={COLOR.green} />
            ) : (
              <Ionicons name="person-outline" size={size} color={COLOR.green} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomStack;
