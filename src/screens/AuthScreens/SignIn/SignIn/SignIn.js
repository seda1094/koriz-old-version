import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';

import UIButton from '../../../../components/UI/UIButton';
import UIInput from '../../../../components/UI/UIInput';

import { createControl, validate, validateForm } from '../../../../form/formFramework';
import { THEME } from '../../../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


class SignIn extends Component {

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

            password: createControl({
                type: 'password',
                label: 'Գաղտնաբառ',
                errorMessage: 'Գաղտնաբառը սխալ է',
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

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground resizeMode='contain' style={styles.banner} source={require('../../../../../assets/images/auth/signIn/banner.png')}>
                </ImageBackground>
                <View style={styles.middle}>
                    <View style={styles.form}>
                        {this.renderInputs()}
                        <UIButton
                            disabled={!this.state.isFormValid}
                            onPress={this.loginHandler}>ՄՈՒՏՔ</UIButton>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.inlineWrapper}>
                            <Text style={styles.text}>ԴԵՌ ԳՐԱՆՑՎԱԾ ՉԵ ՞Ք</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpRoute')}>
                                <Text style={styles.link}> • ԳՐԱՆՑՈՒՄ</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                            <Text style={styles.link}>ԳԱՂՏՆԱԲԱՌԻ ՀԻՇԵՑՈՒՄ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ImageBackground
                    resizeMode='cover'
                    style={styles.bottom}
                    source={require('../../../../../assets/images/auth/signIn/footer.png')}>
                </ImageBackground>
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
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    middle: {
        flex: 3,
        position: 'relative',
        zIndex: 999
    },
    form: {
        // flex: 4,
        // backgroundColor: '#fff',
        position: 'relative',
        zIndex: 999
    },
    info: {
        // flex: 1,
        alignItems: 'center',
        position: 'relative',
        zIndex: 900
    },
    inlineWrapper: {
        flexDirection: 'row'
    },
    text: {
        color: THEME.grey,
        fontWeight: 'bold'
    },
    link: {
        color: THEME.green,
        fontWeight: 'bold'
    },
    bottom: {
        flex: 1.5,
    },
})

export default SignIn;



