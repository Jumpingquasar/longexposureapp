import { StyleSheet } from "react-native";
import { aspectratio, deviceWidth } from "../../constants/distances";

export default StyleSheet.create({
    container: {
        width: deviceWidth, 
        justifyContent: 'center', 
        alignItems: 'center', 
        position:'absolute'
    },
    innerContainer: {
        flexDirection: 'row', 
        width: aspectratio(18, 'width'), 
        justifyContent: 'space-between'
    },
    indicator: {
        width:6, 
        height: 6, 
        borderRadius: 6,    
    },
    content: {
        width: deviceWidth , 
        height: deviceWidth,
    }
})