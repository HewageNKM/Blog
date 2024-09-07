import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import FormField from "@/components/FormField";


const Home = () => {
    const richText = useRef(null);
    const [content, setContent] = useState('');

    const savePost = async () => {}
    const selectImage = async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
                base64: true,
            });

        if (!result.canceled) {
            try {
                const imageSrc = `data:${result.assets[0].mimeType};base64,${result.assets[0].base64}`;
                await richText.current?.insertImage(imageSrc);
            } catch (e) {
                console.log(e);
            }
        }

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView>
                    <View className="px-4">
                        <View className="mt-5">
                            <Text className="text-3xl font-bold">
                                Add Post
                            </Text>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <RichToolbar
                                style={{ marginTop: 10 }}
                                editor={richText}
                                onPressAddImage={selectImage}
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
                            <View>
                                <FormField containerStyles="bg-slate-100" multiline={true} placeholder=""/>
                            </View>
                            <RichEditor
                                ref={richText}
                                initialHeight={400}
                                style={{
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    borderRadius: 5,
                                }}
                            />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Button
                                onPress={savePost}
                                title="Save Post"
                                containerStyles="bg-blue-600"
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <StatusBar animated={true} style="inverted" />
        </SafeAreaView>
    );
};

export default Home;