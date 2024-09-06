import React from 'react';
import {FlatList, SafeAreaView, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import HomeHeader from "@/components/HomeHeader";
import EmptyState from "@/components/EmptyState";
import HomeBody from "@/components/HomeBody";

const Home = () => {
    return (
        <SafeAreaView>
            <FlatList ListEmptyComponent={()=> <EmptyState  subTitle="Create Blog Post" title="Not Blog Post"/>} ListHeaderComponent={()=><HomeHeader />} data={[]} renderItem={({item})=> (<HomeBody />)} keyExtractor={(index)=> index}/>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default Home;