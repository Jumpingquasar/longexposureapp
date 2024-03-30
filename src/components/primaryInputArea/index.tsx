import { StyleProp, Text, TextInput, TextStyle, View, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import { aspectratio } from "../../constants/distances";

interface IPrimaryInputAreaProps {
    hintText: string;
    onChange?(text: string): void;
    containerStyle?: StyleProp<ViewStyle>;
    inputTextStyle?: StyleProp<TextStyle>;
}

export function PrimaryInputArea({containerStyle, inputTextStyle, hintText, onChange = (text) => text} : IPrimaryInputAreaProps){

    return(
        <View 
            style={[{
                width: aspectratio(343, 'width'),
                height: aspectratio(40, 'height'), 
                backgroundColor: colors.inputAreaGray, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginVertical: aspectratio(10, 'width'),
                borderColor: colors.inputAreaBorderGray,
                borderWidth: 1,
                borderRadius: 8
            }, containerStyle]}>
            <TextInput
                textAlign="left"
                numberOfLines={1}
                maxLength={30}
                placeholderTextColor={colors.dividerGray}
                onChangeText={(text) => onChange(text)} 
                style={[{width: aspectratio(320, 'width'), fontSize: 15}, inputTextStyle]} placeholder={hintText}>
            </TextInput>
    </View>
    )
}