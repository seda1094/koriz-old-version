import React from 'react';
import {StyleSheet, Button, View, TextInput, Text } from 'react-native';


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
        backgroundColor: '#f8f8eb',
        borderRadius: 18,
        paddingHorizontal: 10
    },
    errorMessage:{
        fontSize: 12,
        color: 'red'
    }
})

export default UIInput;