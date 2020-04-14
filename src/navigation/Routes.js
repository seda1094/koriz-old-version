import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import AuthRoute from '../screens/AuthScreens/AuthRoute';
import HomeRoute from '../screens/HomeScreens/HomeRoute';
import ErrorRoute from '../screens/ErrorScreens/ErrorRoute'


const MainStack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{
                    header: () => null
                }}>
                <MainStack.Screen name="Auth" component={AuthRoute} />
                <MainStack.Screen name="Home" component={HomeRoute} />
                <MainStack.Screen name="Error" component={ErrorRoute} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;