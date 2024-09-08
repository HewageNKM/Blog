import React, {SetStateAction, useRef, useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import FormField from "@/components/FormField";
import {AntDesign} from "@expo/vector-icons";


const Home = () => {
    const richText = useRef(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const savePost = async () => {}

    const uploadThumbnail = async () => {
       const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
                base64: true,
            });

        if (!result.canceled) {
            try {
                const imageSrc = `data:${result.assets[0].mimeType};base64,${result.assets[0].base64}`;
                setThumbnail(imageSrc);
            } catch (e) {
                console.log(e);
            }
        }
    }
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
                        <View className="w-full py-5">
                            <Text className="text-lg font-semibold">
                                Title
                            </Text>
                            <View>
                                <FormField containerStyles="bg-slate-200 h-10 px-4 py-2 justify-center rounded-lg" multiline={false} placeholder="sci-fi"/>
                            </View>
                        </View>
                        <View className="w-full">
                            <Text className="text-lg font-semibold">
                                Thumbnail
                            </Text>

                            {thumbnail &&  (<View className="w-full mt-5 relative">
                                <TouchableOpacity onPress={()=> setThumbnail(null)} className="absolute z-30 -top-4 right-9 bg-white p-2 rounded-full">
                                    <AntDesign name={"close"} size={20}/>
                                </TouchableOpacity>
                                <Image src={thumbnail} resizeMode={"contain"} className="rounded-lg h-[30vh]"/>
                            </View>)}
                            <TouchableOpacity onPress={()=> uploadThumbnail()} className="text-lg flex-1 pt-5 justify-center items-center font-semibold">
                                <AntDesign name={"upload"} size={30}/>
                            </TouchableOpacity>
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