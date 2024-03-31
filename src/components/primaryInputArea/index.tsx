import { Image, StyleProp, TextInput, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import { aspectratio } from "../../constants/distances";
import images from "../../constants/images";
import { useRef, useState } from "react";

interface IPrimaryInputAreaProps {
    hintText: string;
    onChange?(text: string): void;
    containerStyle?: StyleProp<ViewStyle>;
    inputTextStyle?: StyleProp<TextStyle>;
    isSearch?: boolean;
}

export function PrimaryInputArea({containerStyle, inputTextStyle, hintText, onChange = (text) => text, isSearch} : IPrimaryInputAreaProps){

    const textInputRef = useRef<TextInput | null>( null);

    const handleFocusTextInput = () => {
        if (textInputRef.current) {          
            textInputRef.current.focus();
        }
    };

    return(
        <TouchableWithoutFeedback        
            onPress={handleFocusTextInput}>
            <View 
                style={[{
                    paddingLeft: aspectratio(10, 'height'),
                    flexDirection: 'row',
                    width: aspectratio(343, 'width'),
                    height: aspectratio(40, 'height'), 
                    backgroundColor: colors.inputAreaGray, 
                    alignItems: 'center', 
                    marginVertical: aspectratio(10, 'width'),
                    borderColor: colors.inputAreaBorderGray,
                    borderWidth: 1,
                    borderRadius: 8
                }, containerStyle]}>
                {isSearch && <Image style={{marginTop: aspectratio(5, 'height')}} source={images.search}/>}
                <TextInput
                    ref={textInputRef}
                    textAlign="left"
                    numberOfLines={1}
                    maxLength={30}
                    placeholderTextColor={colors.dividerGray}
                    onChangeText={(text) => onChange(text)} 
                    style={[{width: aspectratio(310, 'width'), fontSize: 15}, inputTextStyle]} placeholder={hintText}>
                </TextInput>
        </View>
    </TouchableWithoutFeedback>
    )
}