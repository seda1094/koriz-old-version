import React, { Component } from 'react';
import { View, Text, Form } from 'react-native';

import is from 'is_js'

import UIButton from '../../../../components/UI/UIButton';
import UIInput from '../../../../components/UI/UIInput';


class SignIn extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                secureTextEntry: false,
                errorMessage: 'Chisht Mail Greq',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                secureTextEntry: true,
                errorMessage: 'Chisht password eq Grel',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    validateControl(value, validation){
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    loginHandler = () => {
        console.log('login');
    }

    onChangeTextHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
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
            <View>
                {this.renderInputs()}
                <UIButton disabled={!this.state.isFormValid} onPress={this.loginHandler}>Sign In</UIButton>
            </View>
        );


    }
}

export default SignIn;