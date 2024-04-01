import { View } from "react-native";
import { deviceWidth } from "../../constants/distances";
import colors from "../../constants/colors";


export const Divider = () => {

    return(
        <View style={{width:deviceWidth, height: 1, backgroundColor: colors.dividerGray}}  />
    )
}