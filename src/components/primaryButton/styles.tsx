import { StyleSheet } from "react-native";
import { aspectratio } from "../../constants/distances";
import colors from "../../constants/colors";

export default StyleSheet.create({
    touchable: {
        width: aspectratio(343, 'width'),
        height: aspectratio(44, 'height'), 
        alignItems: 'center', 
        justifyContent: 'center',
        marginVertical: aspectratio(20, 'width'),
        borderRadius: 8,
    },
    customText: {
        fontSize: 15, 
        color: colors.white,
    }
})