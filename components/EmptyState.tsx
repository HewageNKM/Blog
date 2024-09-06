import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {router} from "expo-router";

const EmptyState = ({title,subTitle}:{title:string, subTitle:string}) => {
    return (
        <View className="flex flex-col gap-2 w-full mt-24 justify-center items-center">
            <AntDesign name={'inbox'} size={80} color="blue"/>
            <Text className="text-xl tracking-wider font-semibold">
                {title}
            </Text>
            <Text className="text-sm text-slate-500 tracking-normal">
                {subTitle}
            </Text>
            <View>
                <TouchableOpacity onPress={()=> router.push("/(home)/addPost")}>
                    <AntDesign name={'plus'} color="blue" size={40}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EmptyState;