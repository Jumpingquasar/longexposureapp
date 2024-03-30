import { BackHandler, Image, TouchableWithoutFeedback } from "react-native";
import images from "../../constants/images";
import { StackActions, useNavigation } from "@react-navigation/native";

export function BackButton(){
    return(
        <TouchableWithoutFeedback onPress={() => StackActions.pop()} >
            <Image source={images.back}></Image>
        </TouchableWithoutFeedback>
    )
}