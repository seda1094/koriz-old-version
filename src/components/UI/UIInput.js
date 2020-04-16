import React from 'react';
import {StyleSheet, Button, View, TextInput, Text } from 'react-native';
import { THEME } from '../../theme';


const isInvalid = ({ valid, touched, shouldValidate }) => {
    return !valid && shouldValidate && touched
}

const UIInput = (props) => {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={props.secureTextEntry}
                value={props.value}
                onChangeText={props.onChangeText} 
                underlineColorAndroid='transparent'/>
            {isInvalid(props)
                ? <Text style={styles.errorMessage}>{props.errorMessage || 'Mutqagreq chisht tvyalner'}</Text>
                : null}
        </View>
    );
}

const styles = StyleSheet.create({
    inputWrapper:{
        alignSelf:'center',
        width: '80%',
        marginBottom: 25
    },
    label:{
        // alignSelf: 'flex-start',
        marginBottom: 5
    },
    input:{
        height: 38,
        backgroundColor: THEME.inputColor,
        borderRadius: 18,
        paddingHorizontal: 10
    },
    errorMessage:{
        fontSize: 12,
        color: THEME.errorColor,
        position: 'relative',
        zIndex: 999
    }
})

export default UIInput;