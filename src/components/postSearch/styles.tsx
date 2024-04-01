import { StyleSheet } from "react-native";
import { deviceWidth } from "../../constants/distances";

export default StyleSheet.create({
    container: {
        padding: 1,
    },
    content: {
        width: deviceWidth/3 - 2 , 
        height: deviceWidth/3 - 2,
    },
})