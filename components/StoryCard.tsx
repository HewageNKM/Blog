import React from 'react';
import {View, Image, Text} from "react-native";

const StoryCard = ({post}:{post:Post}) => {
    return (
        <View className="w-full mt-2">
            <View className="relative w-full h-[30vh]">
                <Image src={post.thumbnail} resizeMode="cover" className="w-full rounded-lg h-[30vh]"/>
                <View className="absolute w-full h-full rounded-lg text-opacity-0 bg-opacity-30 opacity-30 bg-black ">
                    <View className="absolute bottom-0 p-2">
                        <Text className="text-white font-bold">
                            {post.title}
                        </Text>
                        <View>
                            <Text className="text-white">
                                {post.date}
                            </Text>
                        </View>
                    </View>
                    <View className="absolute p-2 right-0 bottom-0">
                        <Text className="text-white">
                            {post.likes} Likes | {post.comments} Comments
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default StoryCard;