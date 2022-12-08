import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from '../../screen/Discover/Discover';
import People from '../../screen/People/People';
import Index from '../../screen/Profile/Index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR, IMAGE_BODY} from '../../utils/theme';
import {Image} from 'react-native';
import ChatScreen from '../../screen/Chat/ChatScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ChatStack from '../Stack/ChatStack';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-deck-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="People"
        component={People}
        options={{
          tabBarLabel: 'People',
          tabBarIcon: ({color, size}) => (
            <Entypo name="location-pin" size={32} color={COLOR.green} />
          ),
        }}
      />

      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color, size}) => (
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
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
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
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" size={size} color={COLOR.green} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomStack;
