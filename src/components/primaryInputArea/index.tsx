import { StyleProp, Text, TextInput, TextStyle, View, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import { aspectratio } from "../../constants/distances";

interface IPrimaryInputAreaProps {
    hintText: string;
    onChange?(text: string): void;
    containerStyle?: StyleProp<ViewStyle>;
    hintTextStyle?: StyleProp<TextStyle>;
    errorText: string;
}

export function PrimaryInputArea({containerStyle, hintTextStyle, hintText, onChange = (text) => text, errorText} : IPrimaryInputAreaProps){

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
            <TextInput
                textAlign="center"
                onChangeText={(text) => onChange(text)} 
                style={[{fontSize: 15, color: colors.white}, hintTextStyle]} placeholder={hintText}></TextInput>
            {errorText && <Text>{errorText}</Text>}
    </View>
    )
}