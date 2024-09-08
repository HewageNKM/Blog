import React, {useState} from 'react';
import {Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import {AntDesign} from "@expo/vector-icons";
import {Link, router} from "expo-router";


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
         router.push("/(home)/home");

        /*if ( !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email) ) {
            Alert.alert("Error", "Invalid Email");
            return
        }

        if(!/^(?=.*\S).{8,}$/.test(password)) {
            Alert.alert("Error", "Password must be at least 8 characters long");
            return
        }
        console.log(email, password);

        setPassword('');
        setEmail('');*/
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="flex flex-col justify-center items-center w-full h-screen">
                    <View>
                        <Text className="text-4xl font-bold">
                            Welcome <Text className="text-purple-500">Back!</Text>
                        </Text>
                        <Text className="text-lg font-medium text-slate-500">
                            Sign in to continue
                        </Text>
                    </View>
                    <View className="mt-10 w-full">
                        <View className="px-4">
                            <View className="flex flex-col gap-2">
                                <Text className="text-lg font-medium text-slate-500">
                                    Email
                                </Text>
                                <View className="flex items-center gap-2 w-[90vw]">
                                    <FormField
                                        containerStyles="w-full bg-slate-50 h-10 font-medium rounded-lg px-4 py-2"
                                        multiline={false} placeholder="example@email.com" onTextChange={(text)=>setEmail(text)} value={email}/>
                                </View>
                            </View>
                            <View className="flex flex-col gap-2 mt-5">
                                <Text className="text-lg font-medium text-slate-500">
                                    Password
                                </Text>
                                <View className="flex items-center gap-2 w-[90vw]">
                                    <FormField secureTextEntry={true}
                                               containerStyles="w-full bg-slate-50 font-medium h-10 rounded-lg px-4 py-2"
                                               multiline={false} placeholder="**************" onTextChange={(text)=> setEmail(text)} value={password}/>
                                </View>
                            </View>
                            <View className="mt-10">
                                <Button title="Continue"  containerStyles="bg-blue-500" onPress={()=> login}/>
                            </View>
                            <View className="flex flex-col mt-3 w-full justify-center items-center">
                                <View>
                                    <Text className="text-sm font-medium text-slate-500">
                                        Create an account? <Link href="/signUp" className="text-blue-500">SignUp</Link>
                                    </Text>
                                </View>
                                <View className="mt-2">
                                    <Text className="text-sm font-medium text-slate-500">
                                        Or Continue with
                                    </Text>
                                </View>
                                <View className="flex  flex-row pt-1 gap-8">
                                    <TouchableOpacity  className="flex flex-row items-center gap-1">
                                        <AntDesign name="facebook-square" size={30} color="black"/>
                                        <Text className="font-medium text-sm">Facebook</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="flex flex-row items-center gap-1">
                                        <AntDesign name="google" size={30} color="black"/>
                                        <Text className="font-medium text-sm">Google</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar animated={true} style={"inverted"}/>
        </SafeAreaView>
    );
};

export default SignIn;