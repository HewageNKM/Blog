import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const Home = () => {
    const [favouritePosts, setFavouritePosts] = React.useState([]);
    useEffect(() => {
        // fetch favourite posts from local database
    });
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="px-4 w-full h-full py-2 flex flex-col">
                    <View className="mt-5">
                        <Text className="text-3xl font-bold ">
                            Favourites
                        </Text>
                    </View>
                    <View className="mt-10 flex flex-col gap-2">

                    </View>
                </View>
            </ScrollView>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default Home;