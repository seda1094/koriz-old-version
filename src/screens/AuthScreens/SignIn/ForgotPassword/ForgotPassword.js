import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import { createControl, validate, validateForm } from '../..//../../form/formFramework';
import UIInput from '../../../../components/UI/UIInput';
import UIButton from '../../../../components/UI/UIButton';


class ForgotPassword extends Component {
    state = {
        isFormValid: false,
        formControls: {
            email: createControl({
                type: 'email',
                label: 'Էլ. Հասցե',
                errorMessage: 'Հասցեն սխալ է',
                secureTextEntry: false
            }, {
                required: true,
                email: true
            }),
        }
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
            isFormValid: validateForm(formControls)
        })
    }

    renderInputs = () => {
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


    submitHandler = () => {
        console.log('WRITE LOGIC TO SEND EMAIL');
        //FOR TESTING
        this.props.navigation.navigate('ConfirmEmail')
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    resizeMode='contain'
                    source={require('../../../../../assets/images/auth/signIn/banner2.png')}
                    style={styles.banner}>
                </ImageBackground>

                <View style={styles.mid}>
                    <View style={styles.headings}>
                        <Text style={styles.text}>ԽՆԴՐՈՒՄ ԵՆՔ ՆՇԵԼ ՁԵՐ</Text>
                        <Text style={styles.heading}>ԷԼ. ՀԱՍՑԵՆ</Text>
                    </View>
                    <View style={styles.form}>
                        {this.renderInputs()}
                        <UIButton
                            disabled={!this.state.isFormValid}
                            onPress={this.submitHandler}>ՀԱՍՏԱՏԵԼ</UIButton>
                    </View>
                </View>

                <ImageBackground
                    resizeMode='cover'
                    style={styles.bottom}
                    source={require('../../../../../assets/images/auth/signIn/footer_2.png')}></ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    banner: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mid: {
        flex: 3,
        position: 'relative',
        zIndex: 999
    },
    headings: {
        flex: 1,
        alignItems: 'center',
    },
    text:{
        fontSize: 15,

    },
    heading:{
        fontSize: 25,
        fontWeight: 'bold',


    },
    form: {
        flex: 2,
    },
    bottom: {
        flex: 2,

    }
})


export default ForgotPassword;