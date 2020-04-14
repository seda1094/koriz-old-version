import React from 'react';
import { Button, View, TextInput, Text } from 'react-native';


const isInvalid = ({ valid, touched, shouldValidate }) => {
    return !valid && shouldValidate && touched
}

const UIInput = (props) => {
    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput
                secureTextEntry={props.secureTextEntry}
                value={props.value}
                onChange={props.onChangeText} />
            {isInvalid(props)
                ? <Text>{props.errorMessage || 'Mutqagreq chisht tvyalner'}</Text>
                : null}
        </View>
    );
}

export default UIInput;