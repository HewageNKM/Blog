import React, {useRef, useState} from 'react';
import { SafeAreaView, ScrollView, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import Button from "@/components/Button";

const Home = () => {
    const richText = useRef(null);
    const [content, setContent] = useState('');
    const savePost = async () => {}
    return (
        <SafeAreaView>
            <ScrollView className="h-screen">
                <View className="px-4">
                    <View className="mt-5">
                        <Text className="text-3xl font-bold">
                            Add Post
                        </Text>
                    </View>
                    <View className="mt-5">
                        <RichToolbar style={{ marginTop: 10}}
                                     editor={richText}
                                        actions={[
                                            actions.keyboard,
                                            actions.setBold,
                                            actions.setItalic,
                                            actions.insertBulletsList,
                                            actions.insertOrderedList,
                                            actions.insertLink,
                                            actions.insertImage,
                                            actions.setStrikethrough,
                                            actions.setUnderline,
                                            actions.code,
                                            actions.alignLeft,
                                            actions.alignCenter,
                                            actions.alignRight,
                                            actions.alignFull,
                                            actions.line,
                                            actions.blockquote,
                                            actions.checkboxList
                                        ]}
                        />
                        <RichEditor ref={richText}
                                    initialHeight={400}
                                    style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5}}/>
                    </View>
                    <View className="mt-5">
                        <Button onPress={savePost} title="Save Post" containerStyles="bg-blue-600"/>
                    </View>
                </View>
            </ScrollView>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default Home;