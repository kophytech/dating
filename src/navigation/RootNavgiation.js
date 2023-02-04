import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screen/Auth/Splash';
import ChatScreen from '../screen/Chat/ChatScreen';
import FilterScreen from '../screen/Filter/FilterScreen';
import NotificationScreen from '../screen/Notification/NotificationScreen';
import OnboardingScreen from '../screen/Onboarding/OnboardingScreen';
import Proscreen from '../screen/PRO/Proscreen';
import BootProfile from '../screen/Profile/BootProfile';
import EditProfile from '../screen/Profile/EditProfile';
import SuccessScreen from '../screen/Success/SuccessScreen';
import UserDetails from '../screen/UserLikes/UserDetails';
import BottomStack from './Bottom/Index';
import AuthStack from './Stack/AuthStack';
import TopNavigation from './TopNavigation/TopNavigation';

const Stack = createStackNavigator();
const RootNavgiation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Bottom" component={BottomStack} />
      <Stack.Screen name="notification" component={NotificationScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="GoProSCreen" component={Proscreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name="BootYourProfile" component={BootProfile} />
      <Stack.Screen name="ChatMessaging" component={ChatScreen} />
      <Stack.Screen name="SuccessSCreen" component={SuccessScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default RootNavgiation;
