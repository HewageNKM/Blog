import React from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
import {Stack} from "expo-router";

const _Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="welcome"/>
        </Stack>
    );
};

export default _Layout;