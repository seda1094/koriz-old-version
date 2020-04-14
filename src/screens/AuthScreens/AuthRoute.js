import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn/SignIn';

const AuthStack = createStackNavigator();

function AuthRoute() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        header: () => null
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

export default AuthRoute;