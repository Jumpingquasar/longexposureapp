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
    videoCover: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        top: 0,
    },
    videoIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    }
})