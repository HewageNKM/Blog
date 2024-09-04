import React from 'react';
import {Text, TouchableOpacity} from "react-native";

const Button = ({title, containerStyles, onClick}: { title: string, containerStyles: string }) => {
    return (
        <TouchableOpacity onPress={onClick} className={`${containerStyles} flex items-center  rounded-lg px-2 py-2`}>
            <Text className="text-xl text-white font-bold tracking-wider">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;