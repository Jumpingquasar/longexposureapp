import { StyleSheet } from "react-native";
import { aspectratio } from "../../constants/distances";

export default StyleSheet.create({
    container: {
        paddingHorizontal: aspectratio(10, 'width')
    },
    middleContainer: {
        height: aspectratio(48, 'height'), 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row'
    },
    innerContainer: {
        width: aspectratio(100, 'width'), 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row'
    }
})