import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from '../../screen/Discover/Discover';
import People from '../../screen/People/People';
import Index from '../../screen/Profile/Index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR, IMAGE_BODY} from '../../utils/theme';
import {Image} from 'react-native';
import ChatScreen from '../../screen/Chat/ChatScreen';

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
          tabBarIcon: ({color, size}) => <Image source={IMAGE_BODY.love} />,
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => <Image source={IMAGE_BODY.chat2} />,
        }}
      />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen
        name="Profile"
        component={Index}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" color={COLOR.primaryOrange} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomStack;
