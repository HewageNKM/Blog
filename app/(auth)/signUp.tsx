import React from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import {Link, router} from "expo-router";
import {AntDesign} from "@expo/vector-icons";

const SignUp = () => {
    return (
        <SafeAreaView className="relative">
            <View className="px-2 py-2 absolute top-10 left-2 z-30">
                <TouchableOpacity onPress={()=> router.back()} className="flex flex-row gap-1 items-center">
                    <AntDesign name="arrowleft" size={24} color="black" />
                    <Text className="text-sm font-medium">
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View className="flex flex-col justify-center items-center w-full h-screen">
                    <View>
                        <Text className="text-4xl font-bold">
                            <Text className="text-purple-500">Welcome!</Text>
                        </Text>
                        <Text className="text-lg font-medium text-slate-500">
                           Create an account to continue
                        </Text>
                    </View>
                    <View className="mt-10 w-full">
                        <View className="px-4">
                            <View className="flex flex-col gap-2">
                                <Text className="text-lg font-medium text-slate-500">
                                    Email
                                </Text>
                                <View className="flex items-center gap-2 w-[90vw]">
                                    <FormField
                                        containerStyles="w-full bg-slate-50 h-10 font-medium rounded-lg px-4 py-2"
                                        multiline={false} placeholder="example@email.com"/>
                                </View>
                            </View>
                            <View className="flex flex-col gap-2 mt-5">
                                <Text className="text-lg font-medium text-slate-500">
                                    Password
                                </Text>
                                <View className="flex items-center gap-2 w-[90vw]">
                                    <FormField secureTextEntry={true}
                                               containerStyles="w-full bg-slate-50 font-medium h-10 rounded-lg px-4 py-2"
                                               multiline={false} placeholder="**************"/>
                                </View>
                            </View>
                            <View className="mt-10">
                                <Button title="Continue" containerStyles="bg-blue-500"/>
                            </View>
                            <View className="flex flex-col mt-3 w-full justify-center items-center">
                                <View>
                                    <Text className="text-sm font-medium text-slate-500">
                                        Have an account? <Link href="/signIn" className="text-blue-500">SignIn</Link>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default SignUp;