import { Text, TextStyle } from "react-native";
import textStyles from "../../constants/textStyles";
import { FunctionComponent } from "react";

interface ICustomTextProps {
    style?: TextStyle;
    children?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
   
}

export const CustomText: FunctionComponent<ICustomTextProps> = ({ children, style }) => { //Custom text component

    return(
        <Text style={[textStyles.bodyMedium, style]}>{children}</Text>
    )
}