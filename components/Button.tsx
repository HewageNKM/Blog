import React from 'react';
import {Text, TouchableOpacity} from "react-native";

const Button = ({title, containerStyles, onPress}: { title: string, containerStyles: string }) => {
    return (
        <TouchableOpacity onPress={onPress} className={`${containerStyles} flex items-center  rounded-lg px-2 py-2`}>
            <Text className="text-xl text-white font-bold tracking-wider">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;