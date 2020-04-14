import React, { Component } from 'react';
import {StyleSheet, View, Text, Form } from 'react-native';

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
        control.value = event.target.value
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
                <View style={styles.top}></View>
                <View style={styles.middle}>
                {this.renderInputs()}
                <UIButton 
                disabled={!this.state.isFormValid} 
                onPress={this.loginHandler}>Sign In</UIButton>
                </View>
                <View style={styles.bottom}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top:{
        flex: 2,
        backgroundColor: 'red'
    },
    middle:{
        flex: 3,
        backgroundColor: 'green'

    },
    bottom:{
        flex: 1,
        backgroundColor: 'blue'

    },
})

export default SignIn;



