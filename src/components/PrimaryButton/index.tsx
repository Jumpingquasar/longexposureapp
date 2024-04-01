import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import { CustomText } from "../customText/customText";
import styles from "./styles";
interface IPrimaryButtonProps {
    buttonText: string;
    onPress(): void;
    containerStyle?: StyleProp<ViewStyle>;
    backgroundColor?: string;
    disabled?: boolean;
}

export const PrimaryButton = ({buttonText, containerStyle, disabled, onPress} : IPrimaryButtonProps) => {

    return(
        <TouchableOpacity 
            disabled={disabled}
            onPress={onPress}
            style={[{backgroundColor: disabled ? colors.disabledButtonBlue : colors.instagramBlue}, styles.touchable, containerStyle]}>
                <CustomText style={styles.customText} >{buttonText}</CustomText>
        </TouchableOpacity>
    )
}