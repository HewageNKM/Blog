import React from 'react';
import {View, Text, Image} from "react-native";
import {AntDesign} from "@expo/vector-icons";

const PostCard = ({post}:{post: { item:Post}}) => {
    return (
        <View className="w-full px-4">
            <View className="mt-5 bg-gray-200 flex flex-row rounded-lg items-center ">
                <View>
                    <Image src={post.item.thumbnail} resizeMode={'cover'} className="w-20 rounded-lg h-20"/>
                </View>
                <View className="pl-5 relative w-full">
                    <View>
                        <Text className="text-lg font-semibold">{post.item.title}</Text>
                    </View>
                    <View className="flex flex-row pt-2 w-[60vw] items-center justify-between">
                        <View>
                            <Text className="text-sm text-slate-600">{post.item.date}</Text>
                        </View>
                        <View className="flex-row flex gap-4">
                            <View className="flex-row flex gap-1">
                                <AntDesign name={"message1"} color="blue" size={20}/>
                                <Text className="text-sm text-slate-600">
                                    {post.item.comments}
                                </Text>
                            </View>
                            <View className="flex flex-row jus items-center gap-1">
                                <AntDesign name={"like2"} color="blue" size={20}/>
                                <Text className="text-sm text-slate-600">{post.item.likes}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PostCard;