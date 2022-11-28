import {createStackNavigator} from '@react-navigation/stack';
import ChatIndex from '../../screen/Chat/ChatIndex';
import Step1 from '../../screen/Steps/Step1';
import Step2 from '../../screen/Steps/Step2';

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Step1Stack" component={Step1} /> */}
      <Stack.Screen name="ChatIndex" component={ChatIndex} />

      {/*  */}
    </Stack.Navigator>
  );
};

export default ChatStack;
