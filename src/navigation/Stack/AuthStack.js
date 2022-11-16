import {createStackNavigator} from '@react-navigation/stack';
import ForgotPassword from '../../screen/Auth/ForgotPassword';
import Login from '../../screen/Auth/Login';
import Otp from '../../screen/Auth/Otp';
import Register from '../../screen/Auth/Register';
import ResetPassword from '../../screen/Auth/ResetPassword';
import Splash from '../../screen/Auth/Splash';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Otp" component={Otp} />

      {/*  */}
    </Stack.Navigator>
  );
};

export default AuthStack;
