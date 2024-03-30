import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../../../components/primaryButton";
import textStyles from "../../../constants/textStyles";
import { AppScreens } from "../../../navigation/rootNavigation";
import { RootStackParamList } from "../../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PrimaryInputArea } from "../../../components/primaryInputArea";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { AppBar } from "../../../components/appBar/appBar";

export function LoginScreen({ navigation : {replace} }: NativeStackScreenProps<RootStackParamList, "Login">){

    const [formData, setFormData] = useState({
        Email: "",
        Password: "",
    });

    const [pageErrors, setPageErrors] = useState<any>({
        Email: "",
        Password: "",
      });

    const onChangeText = (key: string, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    };

    useEffect(() => {        
        setPageErrors({})
    }, [formData])

    const onLogin = () => {     
        let formErrors = {} as any;
        setPageErrors({})
        const validationSchema = Yup.object({
            Email: Yup.string()
                .required("Please enter your email"),
            Password: Yup.string()
                .required("Password can not be empty."),
          });
      
          validationSchema
            .validate(formData, {
              abortEarly: false,
            })
            .then(() => {
                console.log(true)
            //   castThunkAction<UserSignInResponseEntity>(dispatch(userLogin(formData)))
            //     .then((response) => {
            //     })
            //     .catch((error: String) => console.log(error));
            })
            .catch((err: any) => {
                err.inner.forEach((e: any) => {
                  const { path, message } = e;
                  formErrors[path] = message;
                });
                setPageErrors(formErrors);
            });
    };

    console.log(pageErrors)

    return(
        <View style={{alignItems:'center', justifyContent:'center', flex: 1, backgroundColor: Colors.white}}>
            <AppBar hasBackButton={true} isDivided={true}>
                <Text>Hi</Text>
                <Text>Hi</Text>
            </AppBar>
            <PrimaryInputArea
                hintText="Email"
                onChange={(text) =>{onChangeText('Email', text)}}
                errorText={pageErrors.Email}
            />
            <PrimaryInputArea
                hintText="Password"
                onChange={(text) =>{onChangeText('Password', text)}}
                errorText={pageErrors.Password}
            />

            <PrimaryButton
                buttonText="Login"
                onPress={()=>{
                    onLogin();
                    // fetch("/api/login", {method: 'POST', body: JSON.stringify(formData)})
                    // .then((res) => res.json())
                    // .then((json) => console.log(json))
                }}
            />
        </View>
    )
}