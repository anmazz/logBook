import { StyleSheet } from "react-native";
import './Button.scss';
import Icon from '@mui/material/Icon';
import * as React from 'react';

const Button = (props) => {

    return (
        <div className={'button d-flex justify-content-center align-items-center ' + props.className}>
            { props.iconLeft && <Icon>{props.iconLeft}</Icon> }
            <input type="button"  value={props.label}/>
            { props.iconRight && <Icon>{props.iconRight}</Icon> }
        </div>
    );
};

const style = StyleSheet.create({
    default: {
        backgroundColor: 'white'
    }
});

export default Button;