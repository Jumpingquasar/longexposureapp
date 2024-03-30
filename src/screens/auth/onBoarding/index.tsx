import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../../../components/primaryButton";
import { aspectratio } from "../../../constants/distances";
import textStyles from "../../../constants/textStyles";
import { AppScreens } from "../../../navigation/rootNavigation";
import { RootStackParamList } from "../../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export function OnBoardingScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "OnBoarding">){


    return(
        <View style={{alignItems:'center', justifyContent:'center', flex: 1, backgroundColor: Colors.white}}>
            <Text style={textStyles.titleMedium} >Welcome to Long Exposure!</Text>
            <PrimaryButton
                buttonText="Register"
                onPress={()=>{}}
                disabled={true}
            />
            <PrimaryButton
                buttonText="Login"
                onPress={()=>{navigation.navigate(AppScreens.Login)}}
            />
        </View>
    )
}