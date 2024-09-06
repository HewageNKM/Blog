import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import HomeHeader from "@/components/HomeHeader";
import EmptyState from "@/components/EmptyState";
import HomeBody from "@/components/HomeBody";

const Home = () => {
    const [category,setCategory ] = useState('all');
    return (
        <SafeAreaView>
            <FlatList ListEmptyComponent={()=> <EmptyState  subTitle="Be the First One to Create" title="No Blog Post !"/>} ListHeaderComponent={()=><HomeHeader setCategory={setCategory} category={category}/>} data={[]} renderItem={({item})=> (<HomeBody category={category} />)} keyExtractor={(item, index)=> item.id}/>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default Home;