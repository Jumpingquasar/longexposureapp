import { StyleSheet } from "react-native";
import { aspectratio } from "../../constants/distances";
import colors from "../../constants/colors";

export default StyleSheet.create({
    container: {
        paddingLeft: aspectratio(10, 'height'),
        flexDirection: 'row',
        width: aspectratio(343, 'width'),
        height: aspectratio(40, 'height'), 
        backgroundColor: colors.inputAreaGray, 
        alignItems: 'center', 
        marginVertical: aspectratio(10, 'width'),
        borderColor: colors.inputAreaBorderGray,
        borderWidth: 1,
        borderRadius: 8,
    },
    searchIcon: {
        marginTop: aspectratio(5, 'height'),
    },
    textInput: {
        width: aspectratio(310, 'width'), 
        fontSize: 15,
    }
})