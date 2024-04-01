import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { aspectratio } from "../../../constants/distances";

export default StyleSheet.create({
    container: {
        alignItems:'center', 
        justifyContent:'center', 
        flex: 1, 
        backgroundColor: colors.white,
    },
    topContainer: {
        alignItems:'center', 
        justifyContent:'center',
    },
    bottomContainer: {
        alignItems:'center', 
        justifyContent:'center', 
        position:'absolute', 
        bottom: 0,
    },
    textStyle: {
        marginVertical: aspectratio(18, 'height'),
    },
    textStyleInner: {
        fontWeight: 'bold',
    }
});