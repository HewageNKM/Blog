import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import FormField from "@/components/FormField";
import {AntDesign} from "@expo/vector-icons";
import {categories} from "@/constants";

const HomeHeader = ({setCategory,category}:{setCategory: React.Dispatch<React.SetStateAction<string>>,category:string}) => {
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
                <View className="mt-5">
                    <Text className="text-2xl font-medium">
                        Today's Top Stories
                    </Text>
                    <View>
                        <Image  alt="Today" src=""/>
                    </View>
                </View>
                <View className="mt-5">
                    <Text className="text-2xl font-medium">
                        Categories
                    </Text>
                    <ScrollView horizontal={true} className="mt-1 p-1" persistentScrollbar={true}>
                        <View className="flex flex-row gap-5">
                            {categories.map((cat, index) => (
                                <TouchableOpacity key={index} onPress={()=> setCategory(cat.name)}>
                                    <Text className={`text-xl font-semibold ${cat.name === category ? "text-blue-600":"text-slate-500"}`}>
                                        {cat.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default HomeHeader;