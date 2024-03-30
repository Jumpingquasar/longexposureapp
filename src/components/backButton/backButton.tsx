import { Image, TouchableWithoutFeedback } from "react-native";
import images from "../../constants/images";
import { useNavigation } from '@react-navigation/native';

export function BackButton(){
    const navigation = useNavigation();
    return(
        <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
            <Image source={images.back}></Image>
        </TouchableWithoutFeedback>
    )
}