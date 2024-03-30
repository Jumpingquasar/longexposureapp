import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { aspectratio, deviceWidth } from "../../constants/Distances";
import Colors from "../../constants/Colors";

export default function PrimaryButton(){


    return(
        <TouchableOpacity style={{
            width:deviceWidth, 
            height: aspectratio(40, 'height'), 
            backgroundColor: Colors.instagramBlue, 
            alignItems: 'center', 
            justifyContent: 'center'
        }}>
            <Text>Login</Text>
        </TouchableOpacity>
    )
}