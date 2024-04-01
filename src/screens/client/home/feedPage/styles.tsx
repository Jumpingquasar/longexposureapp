import { StyleSheet } from "react-native";
import { aspectratio, deviceWidth } from "../../../../constants/distances";

export default StyleSheet.create({
    flatlist: {
        height: aspectratio(650, 'height'), 
        width: deviceWidth
    }
})