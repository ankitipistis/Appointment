import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Pages
import Business from './screens/Business';
import LogInScreen from './screens/Login';
import SignInScreen from './screens/SignIn';
import PasswordScreen from './screens/ForgotPwd';

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="Business" component={Business} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "50%"

  },
});
