import React from 'react';
import {TextInput} from "react-native";

const FormField = ({containerStyles,multiline,placeholder,secureTextEntry,onTextChange,value}:{value:string,containerStyles:string,multiline:boolean, placeholder:string,secureTextEntry?:boolean,onTextChange:(text: string) => void}) => {
    return (
        <TextInput value={value} onChangeText={onTextChange} secureTextEntry={secureTextEntry} placeholderTextColor="#94a3b8"  className={`${containerStyles}`} multiline={multiline} placeholder={placeholder}/>
    );
};

export default FormField;