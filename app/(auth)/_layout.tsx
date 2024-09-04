import React from 'react';
import {Stack} from "expo-router";

const _Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="signIn"/>
            <Stack.Screen name="signUp"/>
        </Stack>
    );
};

export default _Layout;