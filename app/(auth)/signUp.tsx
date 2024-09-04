import React from 'react';
import {SafeAreaView, ScrollView, Text} from "react-native";
import {StatusBar} from "expo-status-bar";

const SignUp = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>SignUp</Text>
            </ScrollView>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default SignUp;