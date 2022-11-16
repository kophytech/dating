import {createStackNavigator} from '@react-navigation/stack';
import BottomStack from './Bottom/Index';
import AuthStack from './Stack/AuthStack';

const Stack = createStackNavigator();
const RootNavgiation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Bottom" component={BottomStack} />

      {/*  */}
    </Stack.Navigator>
  );
};

export default RootNavgiation;
