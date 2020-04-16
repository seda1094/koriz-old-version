import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import ForgotPassword from './ForgotPassword/ForgotPassword';
import ConfirmEmail from './ForgotPassword/ConfirmEmail';
import ChangePassword from './ChangePassword/ChangePassword';
import SuccessChangePassword from './ChangePassword/SuccessChangePassword';
import SignIn from './SignIn/SignIn';
import { THEME } from '../../../theme';


const SignInStack = createStackNavigator();

function SignInRoute() {
    return (
        <SignInStack.Navigator
            // screenOptions={{
            //     header: () => null
            // }}
            >
            <SignInStack.Screen options={{
                header: () => null,
            }} name="SignIn" 
            component={SignIn} 
            />
            <SignInStack.Screen name="ForgotPassword" component={ForgotPassword} 
            options={{
                headerTitle: '',
                headerTintColor: THEME.green
            }}/>
            <SignInStack.Screen name="ConfirmEmail" component={ConfirmEmail} />
            <SignInStack.Screen name="ChangePassword" component={ChangePassword} />
            <SignInStack.Screen name="SuccessChangePassword" component={SuccessChangePassword} />
        </SignInStack.Navigator>
    );
}

export default SignInRoute;