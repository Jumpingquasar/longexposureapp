import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, View } from "react-native";
import { useDispatch } from "react-redux";
import { AppBar } from "../../../components/appBar/appBar";
import { PrimaryButton } from "../../../components/primaryButton";
import { PrimaryInputArea } from "../../../components/primaryInputArea";
import images from "../../../constants/images";
import { userPostLogin } from "../../../services/authService";
import { setUser } from "../../../store/authSlice";
import { RootStackParamList } from "../../../types/navigation";
import styles from "./styles";

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
        if (loginResponse.response.status == 201)
            dispatch(setUser({Email: formData.Email, isGuest: false, encryptedFormData: loginResponse.encryptedFormData}))
    };

    return(
        <View style={styles.container}>
            <AppBar isPositioned={true} hasBackButton={true}/>
            <Image style={styles.logo} source={images.instagramLogo}/>
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