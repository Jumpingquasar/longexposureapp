import { Image, TouchableWithoutFeedback } from "react-native";
import images from "../../constants/images";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

export const BackButton = () => {
    const navigation = useNavigation();
    return(
        <TouchableWithoutFeedback style={styles.touchable} onPress={() => navigation.goBack()} >
            <Image source={images.back}></Image>
        </TouchableWithoutFeedback>
    )
}