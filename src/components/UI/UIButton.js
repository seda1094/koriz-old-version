import React from 'react';
import {StyleSheet, Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { THEME } from '../../theme';


const UIButton = (props) => {
    console.log(props.children);
    const buttonStyle = {...styles.button}
    props.disabled
        ? buttonStyle.backgroundColor = THEME.disabledButtonColor
        : buttonStyle.backgroundColor = THEME.green
    
    return (
        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={{...buttonStyle}} onPress={props.onPress}
                disabled={props.disabled}>
                    <Text style={styles.buttonTitle}>{props.children}</Text>
                    </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

    buttonWrapper: {
        alignSelf: 'center',
        width: '80%',
        marginBottom: 25
    },
    button: {
        height: 38,
        borderRadius: 18,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle:{
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold'
    },
    disabled:{
        color: '#fff',

    }
})

export default UIButton;