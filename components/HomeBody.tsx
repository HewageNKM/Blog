import React, {useEffect} from 'react';
import {View} from "react-native";

const HomeBody = ({category}:{category:string}) => {
    const [posts, setPosts] = React.useState([]);

    useEffect(()=>{
        console.log(category);
    },[category]);
    return (
        <View className="mt-10">
            <View className="flex flex-col gap-2 px-4 py-2">

            </View>
        </View>
    );
};

export default HomeBody;