import { useRef } from "react";
import { Image, StyleProp, TextInput, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import images from "../../constants/images";
import styles from "./styles";

interface IPrimaryInputAreaProps {
    hintText: string;
    onChange?(text: string): void;
    containerStyle?: StyleProp<ViewStyle>;
    inputTextStyle?: StyleProp<TextStyle>;
    isSearch?: boolean;
}

export const PrimaryInputArea = ({containerStyle, inputTextStyle, hintText, onChange = (text) => text, isSearch} : IPrimaryInputAreaProps) => {

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
                style={[styles.container, containerStyle]}>
                {isSearch && <Image style={styles.searchIcon} source={images.search}/>}
                <TextInput
                    ref={textInputRef}
                    textAlign="left"
                    numberOfLines={1}
                    maxLength={30}
                    placeholderTextColor={colors.dividerGray}
                    onChangeText={(text) => onChange(text)} 
                    style={[styles.textInput, inputTextStyle]} placeholder={hintText}>
                </TextInput>
        </View>
    </TouchableWithoutFeedback>
    )
}