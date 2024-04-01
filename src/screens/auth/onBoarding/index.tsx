import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, View } from "react-native";
import { CustomText } from "../../../components/customText/customText";
import { Divider } from "../../../components/divider/divider";
import { PrimaryButton } from "../../../components/primaryButton";
import images from "../../../constants/images";
import { AppScreens } from "../../../navigation/rootNavigation";
import { RootStackParamList } from "../../../types/navigation";
import styles from "./styles";

export const OnBoardingScreen = ({ navigation }: NativeStackScreenProps<RootStackParamList, "OnBoarding">) => {

    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image source={images.instagramLogo} ></Image>
                <PrimaryButton
                    buttonText="Login"
                    onPress={()=>{navigation.navigate(AppScreens.Login)}}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Divider/>
                <CustomText style={styles.textStyle}>Don't have an account? 
                    <CustomText style={styles.textStyleInner}>
                        {' '}Sign up.
                    </CustomText>
                </CustomText>
            </View>
        </View>
    )
}