import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../../../components/PrimaryButton";

export function OnBoarding(){


    return(
        <View style={{alignItems:'center', justifyContent:'center', flex: 1, backgroundColor: Colors.white}}>
            <Text>Welcome to Long Exposure!</Text>
            <PrimaryButton
            />
            <PrimaryButton
            />
        </View>
    )
}