import React from 'react';
import {TextInput} from "react-native";

const FormField = ({containerStyles,multiline,placeholder,secureTextEntry}:{containerStyles,multiline:boolean, placeholder:string,secureTextEntry?:boolean}) => {
    return (
        <TextInput secureTextEntry={secureTextEntry} placeholderTextColor="#94a3b8"  className={`${containerStyles}`} multiline={multiline} placeholder={placeholder}/>
    );
};

export default FormField;