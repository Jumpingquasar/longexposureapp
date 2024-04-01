import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { aspectratio } from "../../../constants/distances";

export default StyleSheet.create({
    container: {
        alignItems:'center', 
        justifyContent:'center', flex: 1, 
        backgroundColor: colors.white
    },
    logo: {
        marginVertical: aspectratio(50, 'height')},
});