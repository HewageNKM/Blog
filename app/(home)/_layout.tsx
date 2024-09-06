import React from 'react';
import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";

const _Layout = () => {
    return (
        <Tabs screenOptions={{headerShown:false,tabBarShowLabel:false}}>
            <Tabs.Screen name="home" options={{
                headerShown: false,
                title: "Home",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}/>
            <Tabs.Screen name="favourite" options={{
                headerShown: false,
                title: "Favourite",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="bookmark" color={color} />,
            }}/>
            <Tabs.Screen name="addPost" options={{
                headerShown: false,
                title: "Create Post",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
            }}/>
            <Tabs.Screen name="account" options={{
                headerShown: false,
                title: "Account",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
            }}/>
        </Tabs>
    );
};

export default _Layout;