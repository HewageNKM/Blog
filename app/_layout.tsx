import React from 'react';
import {Stack} from "expo-router";
import {GlobalProvider} from "@/hooks/GlobalProvider";

const _Layout = () => {
    return (
        <GlobalProvider>
            <Stack screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="(welcome)"/>
                <Stack.Screen name="(auth)"/>

            </Stack>
        </GlobalProvider>
    );
};

export default _Layout;