import React, { Component } from 'react';
import {StyleSheet, View, Image, ImageBackground } from 'react-native';

import UIButton from '../../../../components/UI/UIButton';
import UIInput from '../../../../components/UI/UIInput';

import { createControl, validate, validateForm } from '../../../../form/formFramework';


class SignIn extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: createControl({
                type: 'email',
                label: 'Email',
                errorMessage: 'Chisht Mail Greq',
                secureTextEntry: false
            }, {
                required: true,
                email: true
            }),

            password: createControl({
                type: 'password',
                label: 'Password',
                errorMessage: 'Chisht password eq Grel',
                secureTextEntry: true
            }, {
                required: true,
                minLength: 6,
                password: true
            })  
        }
    }


    loginHandler = () => {
        console.log('login');
    }

    onChangeTextHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }
        control.value = event
        control.touched = true
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls, 
            isFormValid : validateForm(formControls)
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <UIInput
                    key={index}
                    value={control.value}
                    type={console.type}
                    label={control.label}
                    secureTextEntry={control.secureTextEntry}
                    errorMessage={control.errorMessage}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    onChangeText={event => this.onChangeTextHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground resizeMode='contain' style={styles.top} source={require('../../../../../assets/images/auth/signIn/banner.png')}>
                </ImageBackground>
                <View style={styles.middle}>
                {this.renderInputs()}
                <UIButton 
                disabled={!this.state.isFormValid} 
                onPress={this.loginHandler}>Sign In</UIButton>
                </View>
                <ImageBackground 
                resizeMode='cover' 
                style={styles.bottom} 
                source={require('../../../../../assets/images/auth/signIn/12.png')}>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    top:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner:{
        height: 'auto',
        width: '100%'
    },
    middle:{
        flex: 3,
    },
    bottom:{
        flex: 1.5,
    },
})

export default SignIn;



