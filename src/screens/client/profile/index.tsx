import { Text, TouchableOpacity, View } from "react-native"
import textStyles from "../../../constants/textStyles"
import { aspectratio } from "../../../constants/distances"
import colors from "../../../constants/colors"
import { useDispatch } from "react-redux"
import { setUser } from "../../../store/authSlice"


export const Profile = () => {  //Not Implemented.
    const dispatch = useDispatch();
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <TouchableOpacity 
                onPress={() => dispatch(setUser({Email: '', encryptedFormData: '', isGuest: true}))}
                style={{
                    width:aspectratio(100, 'width'), 
                    height:aspectratio(40, 'height'), 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderRadius: 10, 
                    backgroundColor: colors.dividerGray,
                    elevation: 25,
                    borderWidth: 1
                }}>
                <Text style={textStyles.titleMedium}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}