import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpRoute from './SignUp/SignUpRoute';
import SignInRoute from './SignIn/SignInRoute';

const AuthStack = createStackNavigator();

function AuthRoute() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        header: () => null
      }}>
      <AuthStack.Screen name="SignInRoute" component={SignInRoute} />
      <AuthStack.Screen name="SignUpRoute" component={SignUpRoute} />
    </AuthStack.Navigator>
  );
}

export default AuthRoute;