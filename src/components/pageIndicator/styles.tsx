import { StyleSheet } from "react-native";
import { aspectratio, deviceWidth } from "../../constants/distances";

export default StyleSheet.create({
    container: {
        width: deviceWidth, 
        justifyContent: 'center', 
        alignItems: 'center',
        position:'absolute',
        paddingRight: aspectratio(20, 'width')
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
    }
})