import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { aspectratio } from "../../../constants/distances";

export default StyleSheet.create({
    container: {
        alignItems:'center', 
        flex: 1, 
        backgroundColor: colors.white},
    logo: {
        height: 33, 
        resizeMode: 'contain', 
        alignSelf: 'center', 
        alignContent: 'center'
    },
});