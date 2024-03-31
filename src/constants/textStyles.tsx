import { StyleSheet } from "react-native";
import colors from "./colors";

const textStyles = StyleSheet.create({

    titleSmall:{
        fontSize: 20, 
        fontWeight: 'bold',
        fontFamily: 'SF-Pro-Text-Bold',
        color: colors.black
    },

    titleMedium:{
        fontSize: 24, 
        fontWeight: 'bold',
        fontFamily: 'SF-Pro-Text-Bold',
        color: colors.black
    },
    titleLarge:{
        fontSize: 32, 
        fontWeight: 'bold',
        fontFamily: 'SF-Pro-Text-Bold',
        color: colors.black
    },

    bodySmall:{
        fontSize: 13,
        fontFamily: 'SF-Pro-Text-Regular',
        color: colors.black
    },

    bodySmallBold:{
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'SF-Pro-Text-Bold',
        color: colors.black
    },

    bodyMedium:{
        fontSize: 16,
        fontFamily: 'SF-Pro-Text-Regular',
        color: colors.black
    },

    bodyMediumBold:{
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'SF-Pro-Text-Bold',
        color: colors.black
    },

    bodyLarge:{
        fontSize: 18, 
        fontWeight: 'bold',
        fontFamily: 'SF-Pro-Text-Regular',
        color: colors.black
    },

});

export default textStyles;
