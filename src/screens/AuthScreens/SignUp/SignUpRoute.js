import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './SignUp';
import SetName from './SignUpInfo/SetName';
import SetAdress from './SignUpInfo/SetAdress';


const SignUpStack = createStackNavigator();

function SignUpRoute() {
  return (
      <SignUpStack.Navigator
      screenOptions={{
        header: () => null
      }}>
        <SignUpStack.Screen name="SignUp" component={SignUp} />
        <SignUpStack.Screen name="SetName" component={SetName} />
        <SignUpStack.Screen name="SetAdress" component={SetAdress} />

      </SignUpStack.Navigator>
  );
}

export default SignUpRoute;