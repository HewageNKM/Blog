import React from 'react';
import {SafeAreaView, ScrollView, Text} from "react-native";
import {StatusBar} from "expo-status-bar";

const SignIn = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>SignIn</Text>
            </ScrollView>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default SignIn;