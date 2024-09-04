import React from 'react';
import {Stack} from "expo-router";

const _Layout = () => {
    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="(welcome)"/>
            <Stack.Screen name="(auth)"/>
        </Stack>
    );
};

export default _Layout;