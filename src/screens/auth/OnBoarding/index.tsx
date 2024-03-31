import { Image, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { aspectratio } from "../../../constants/distances";
import { AppScreens } from "../../../navigation/rootNavigation";
import { RootStackParamList } from "../../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import images from "../../../constants/images";
import { Divider } from "../../../components/divider/divider";
import { PrimaryButton } from "../../../components/primaryButton";

export const OnBoardingScreen = ({ navigation }: NativeStackScreenProps<RootStackParamList, "OnBoarding">) => {

    return(
        <View style={{alignItems:'center', justifyContent:'center', flex: 1, backgroundColor: Colors.white}}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image source={images.instagramLogo} ></Image>
                <PrimaryButton
                    buttonText="Login"
                    onPress={()=>{navigation.navigate(AppScreens.Login)}}
                />
            </View>
            <View style={{alignItems:'center', justifyContent:'center', position:'absolute', bottom: 0}}>
                <Divider/>
                <Text style={{marginVertical: aspectratio(18, 'height')}}>Don't have an account? 
                    <Text style={{fontWeight: 'bold'}} >
                        {' '}Sign up.
                    </Text>
                </Text>
            </View>
        </View>
    )
}