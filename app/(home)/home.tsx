import React from 'react';
import {SafeAreaView} from "react-native";
import {StatusBar} from "expo-status-bar";

const Home = () => {
    return (
        <SafeAreaView>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default Home;