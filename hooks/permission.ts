import {Platform} from "react-native";
import * as imagePicker from "expo-image-picker";

export const getLibraryPermission = async () => {
    if (Platform.OS !== 'web') {
        const {status} = await imagePicker.getMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            const {status} = await imagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please enable, camera roll permissions in the settings to make this work!');
            }
        }
    }
}