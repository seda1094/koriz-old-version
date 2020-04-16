import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import { createControl, validate, validateForm } from '../../../../form/formFramework';
import UIInput from '../../../../components/UI/UIInput';
import UIButton from '../../../../components/UI/UIButton';


class ConfirmEmail extends Component {
   
    submitHandler = () => {
        console.log('route');
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
                        <Text style={styles.text}>ՀՂՈՒՄԸ ՈՒՂՂԱՐԿՎԱՂ Է ՁԵՐ</Text>
                        <Text style={styles.text}>ԷԼ. ՀԱՍՑԵԻՆ</Text>

                    </View>
                    <View style={styles.form}>
                        <UIButton
                            disabled={false}
                            onPress={this.submitHandler}>ՇԱՐՈՒՆԱԿԵԼ</UIButton>
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
        paddingBottom: 10
    },
    form: {
        flex: 1,
    },
    bottom: {
        flex: 2,

    }
})


 
export default ConfirmEmail;