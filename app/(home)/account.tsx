import React from 'react';
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, Alert} from "react-native";
import {StatusBar} from "expo-status-bar";
import {AntDesign} from "@expo/vector-icons";
import {router} from "expo-router";

const Home = () => {
    const [user, setUser] = React.useState({name:"Exmple",email:"example@gmail.com"});

    const logout = () => {
        Alert.alert("Logout","Are you sure you want to logout?",[
            {
                text:"No",
                onPress:()=>{}
            },
            {
                text: "Yes",
                onPress: () => {
                    router.replace("/(auth)/signIn");
                }
            }
        ]);
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="px-4 w-full h-screen py-2 flex flex-col">
                    <View className="mt-5">
                        <Text className="text-3xl font-bold ">
                            Account
                        </Text>
                    </View>
                    <View className="pt-10 flex justify-center items-center flex-col gap-2">
                        <View className="w-full  justify-center items-center">
                            <View>
                                <AntDesign name={'user'} size={100} color="blue"/>
                            </View>
                        </View>
                        <View className="w-full justify-center items-center">
                            <View className="flex w-full justify-center items-center">
                                <Text className="text-xl tracking-wider font-semibold">
                                    {user.name}
                                </Text>
                                <Text className="text-sm text-slate-500 tracking-normal">
                                    {user.email}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View className="mt-5 w-full">
                        <View className="pt-2 flex justify-center items-center flex-col gap-2">
                            <TouchableOpacity onPress={()=> logout()}>
                                <Text className="text-xl font-medium text-blue-600">
                                    Logout
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default Home;