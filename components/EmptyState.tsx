import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

const EmptyState = ({title,subTitle}:{title:string, subTitle:string}) => {
    return (
        <View className="flex flex-col gap-2 w-full justify-center items-center">
            <Text>
                {title}
            </Text>
            <Text>
                {subTitle}
            </Text>
            <View>
                <TouchableOpacity>
                    <Text>
                        Add Post
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EmptyState;