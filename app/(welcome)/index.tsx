import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Button from "@/components/Button";
import {router} from "expo-router";

const Index = () => {
    const onClick = () => {
        router.replace("/(auth)/signIn");
    }
    return (
        <SafeAreaView>
            <ScrollView className="bg-amber-50">
                <View className="flex justify-evenly items-center w-full h-screen">
                    <View className="flex items-center gap-3">
                        <Text className="font-bold text-7xl">
                            Bloggie
                        </Text>
                        <Text className="text-slate-500 text-xl font-medium">
                            It's Your Partner.
                        </Text>
                        <Text className="text-lg font-medium text-purple-500">
                            Explore | Enjoy | Inspire
                        </Text>
                    </View>
                    <View className="mt-10">
                        <Button onClick={onClick} title="Let's Start" containerStyles="w-[90vw] bg-blue-500"/>
                    </View>
                </View>
            </ScrollView>
            <StatusBar animated={true} style={"dark"}/>
        </SafeAreaView>
    );
};

export default Index;