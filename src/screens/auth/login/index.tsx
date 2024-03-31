import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppBar } from "../../../components/appBar/appBar";
import { PrimaryInputArea } from "../../../components/primaryInputArea";
import { aspectratio } from "../../../constants/distances";
import images from "../../../constants/images";
import { RootStackParamList } from "../../../types/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice";
import { PrimaryButton } from "../../../components/primaryButton";
import { userPostLogin } from "../../../services/authService";

export const LoginScreen = ({}: NativeStackScreenProps<RootStackParamList, "Login">) => {

    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        Email: "",
        Password: "",
    });


    const onChangeText = (key: string, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    };

    const onLogin = async () => {
        const loginResponse = await userPostLogin(JSON.stringify(formData));
        if (loginResponse.status == 201)
            dispatch(setUser({Email: formData.Email, isGuest: false}))
    };

    return(
        <View style={{alignItems:'center', justifyContent:'center', flex: 1, backgroundColor: Colors.white}}>
            <AppBar isPositioned={true} hasBackButton={true}/>
            <Image style={{marginVertical: aspectratio(50, 'height')}} source={images.instagramLogo}/>
            <PrimaryInputArea
                hintText="Email"
                onChange={(text) =>{onChangeText('Email', text)}}
            />
            <PrimaryInputArea
                hintText="Password"
                onChange={(text) =>{onChangeText('Password', text)}}
            />

            <PrimaryButton
                disabled={!formData.Email || !formData.Password}
                buttonText="Login"
                onPress={onLogin}
            />
        </View>
    )
}