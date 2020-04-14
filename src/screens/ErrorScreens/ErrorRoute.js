import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NetworkError from './NetworkError';
import OperationFailed from './OperationFailed';


const ErrorStack = createStackNavigator();

function ErrorRoute() {
  return (
      <ErrorStack.Navigator>
        <ErrorStack.Screen name="NetworkError" component={NetworkError} />
        <ErrorStack.Screen name="OperationFailed" component={OperationFailed} />
      </ErrorStack.Navigator>
  );
}

export default ErrorRoute;