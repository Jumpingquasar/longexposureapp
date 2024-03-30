import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppBar } from "../../../components/appBar/appBar";
import PrimaryButton from "../../../components/primaryButton";
import { PrimaryInputArea } from "../../../components/primaryInputArea";
import { aspectratio } from "../../../constants/distances";
import images from "../../../constants/images";
import { loginRequest } from "../../../store/thunks/userThunks";
import { RootStackParamList } from "../../../types/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice";

export function LoginScreen({}: NativeStackScreenProps<RootStackParamList, "Login">){

    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        Email: "",
        Password: "",
    });


    const onChangeText = (key: string, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    };

    const onLogin = async () => {
        const loginResponse = await loginRequest(formData);
        if (loginResponse)
            dispatch(setUser({Email: formData.Email, isGuest: false}))
    };

    return(
        <View style={{alignItems:'center', justifyContent:'center', flex: 1, backgroundColor: Colors.white}}>
            <AppBar hasBackButton={true}/>
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