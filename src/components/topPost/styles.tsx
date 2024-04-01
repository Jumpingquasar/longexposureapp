import { StyleSheet } from "react-native";
import { aspectratio } from "../../constants/distances";

export default StyleSheet.create({
    container: {
        paddingHorizontal: aspectratio(10, 'width'), 
        height: aspectratio(54, 'height'), 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row',
    },
    innerContainer: {
        alignItems: 'center', 
        flexDirection: 'row',
    },
    profilePhoto: {
        width: 34, 
        height: 34, 
        marginRight: 10, 
        borderRadius: 17,
    }
})