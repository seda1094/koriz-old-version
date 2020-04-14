import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeTab/Home';

const HomeStack = createStackNavigator();

function HomeRoute() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Navigator>
  );
}

export default HomeRoute;