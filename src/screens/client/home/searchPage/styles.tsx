import { StyleSheet } from "react-native";
import { aspectratio, deviceWidth } from "../../../../constants/distances";

export default StyleSheet.create({
    flatList: 
        {
            width: deviceWidth, 
            height: aspectratio(650, 'height'),
            flexDirection: 'column', 
            alignSelf:'flex-start'
        },
});