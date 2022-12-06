import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screen/Auth/Splash';
import ChatScreen from '../screen/Chat/ChatScreen';
import FilterScreen from '../screen/Filter/FilterScreen';
import OnboardingScreen from '../screen/Onboarding/OnboardingScreen';
import Proscreen from '../screen/PRO/Proscreen';
import SuccessScreen from '../screen/Success/SuccessScreen';
import UserDetails from '../screen/UserLikes/UserDetails';
import BottomStack from './Bottom/Index';
import AuthStack from './Stack/AuthStack';

const Stack = createStackNavigator();
const RootNavgiation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Bottom" component={BottomStack} />
      <Stack.Screen name="SuccessSCreen" component={SuccessScreen} />
      <Stack.Screen name="GoProSCreen" component={Proscreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name="ChatMessaging" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default RootNavgiation;
