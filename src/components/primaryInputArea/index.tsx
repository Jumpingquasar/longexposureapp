import { StyleProp, TextInput, TextStyle, View, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import { aspectratio } from "../../constants/distances";

interface IPrimaryInputAreaProps {
    hintText: string;
    onChange(): void;
    containerStyle?: StyleProp<ViewStyle>;
    hintTextStyle?: StyleProp<TextStyle>;
    rounded?: boolean;
    backgroundColor?: string;
    border?: boolean;
    disabled?: boolean;
    borderRadius?: number;
}

export function PrimaryInputArea({containerStyle, hintTextStyle, hintText, onChange} : IPrimaryInputAreaProps){

    return(
        <View 
            style={[{
                width: aspectratio(300, 'width'),
                height: aspectratio(40, 'height'), 
                backgroundColor: colors.lightGray, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginVertical: aspectratio(10, 'width'),
                elevation: 1,
                borderRadius: 12
            }, containerStyle]}>
            <TextInput onChange={onChange} style={[{fontSize: 15, color: colors.white}, hintTextStyle]}>{hintText}</TextInput>
    </View>
    )
}