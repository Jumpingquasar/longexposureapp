import { StyleSheet } from "react-native";
import { aspectratio, deviceWidth } from "../../constants/distances";

export default StyleSheet.create({
    container: { 
        height: aspectratio(60, 'height'),
        top: 0, 
        justifyContent:'space-between'
    },
    innerContainer: {
        width: deviceWidth, 
        justifyContent:'space-between', 
        alignContent: 'center', 
        flexDirection: 'row', 
        alignItems:'center', 
        paddingHorizontal: aspectratio(16, 'width')
    },
});