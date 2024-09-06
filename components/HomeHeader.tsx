import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import FormField from "@/components/FormField";
import {AntDesign} from "@expo/vector-icons";

const HomeHeader = () => {
    return (
        <View className="w-full">
            <View className="px-4 mt-5">
                <View className="flex flex-col justify-start gap-1">
                    <Text className="text-lg font-medium">Search</Text>
                    <FormField containerStyles="h-10 bg-slate-200 rounded-lg px-4 pr-12 py-2" multiline={false} placeholder="Sci-Fie, Science, LiftStyle......"/>
                    <View className="absolute right-3 top-9">
                        <TouchableOpacity>
                            <AntDesign name={'search1'} size={25}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomeHeader;