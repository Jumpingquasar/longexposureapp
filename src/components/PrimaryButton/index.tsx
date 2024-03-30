import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { aspectratio, deviceWidth } from "../../constants/distances";
import colors from "../../constants/colors";
import textStyles from "../../constants/textStyles";
interface IPrimaryButtonProps {
    buttonText: string;
    onPress(): void;
    containerStyle?: StyleProp<ViewStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
    rounded?: boolean;
    backgroundColor?: string;
    border?: boolean;
    disabled?: boolean;
    borderRadius?: number;
}

export default function PrimaryButton({buttonText, containerStyle, buttonTextStyle, disabled, onPress} : IPrimaryButtonProps){

    return(
        <TouchableOpacity 
            disabled={disabled}
            onPress={onPress}
            style={[{
                width: aspectratio(343, 'width'),
                height: aspectratio(44, 'height'), 
                backgroundColor: disabled ? colors.disabledButtonBlue : colors.instagramBlue, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginVertical: aspectratio(20, 'width'),
                borderRadius: 8
            }, containerStyle]}>
                <Text style={[{fontSize: 15, color: colors.white}, buttonTextStyle]} >{buttonText}</Text>
        </TouchableOpacity>
    )
}