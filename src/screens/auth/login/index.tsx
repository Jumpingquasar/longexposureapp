import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../../../components/primaryButton";
import textStyles from "../../../constants/textStyles";
import { AppScreens } from "../../../navigation/rootNavigation";
import { RootStackParamList } from "../../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PrimaryInputArea } from "../../../components/primaryInputArea";

export function LoginScreen({ navigation : {replace} }: NativeStackScreenProps<RootStackParamList, "Login">){


    return(
        <View style={{alignItems:'center', justifyContent:'center', flex: 1, backgroundColor: Colors.white}}>
            <PrimaryInputArea
                hintText="Email"
                onChange={() =>{}}
            />
            <PrimaryInputArea
                hintText="Password"
                onChange={() =>{}}
            />
            <PrimaryButton
                buttonText="Login"
                onPress={()=>{replace(AppScreens.Home)}}
            />
        </View>
    )
}