import React, {useState} from 'react';
import {FlatList, SafeAreaView} from "react-native";
import {StatusBar} from "expo-status-bar";
import HomeHeader from "@/components/HomeHeader";
import EmptyState from "@/components/EmptyState";
import {posts} from "@/constants";
import PostCard from "@/components/PostCard";

const Home = () => {
    const [category, setCategory] = useState('all');
    return (
        <SafeAreaView>
            <FlatList
                ListEmptyComponent={() => <EmptyState subTitle="Be the First One to Create" title="No Blog Post !"/>}
                ListHeaderComponent={() => <HomeHeader setCategory={setCategory} category={category}/>} data={posts}
                renderItem={(card) => (<PostCard post={card}/>)} keyExtractor={(item) => item.id}/>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default Home;