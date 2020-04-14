import React from 'react';
import { Button } from 'react-native';


const UIButton = (props) => {
console.log(props.children);

    return ( 
        <Button onPress={props.onPress}
        disabled={props.disabled} title={props.children}/>
     );
}
 
export default UIButton;