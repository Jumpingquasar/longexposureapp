import { ActivityIndicator, View } from "react-native";
import { getLoading } from "../../store/systemSlice/selectors";

export const Loading = () => {
    const isLoading = getLoading();
    
    return(
        isLoading && <View
            style={{
                flex: 1,
                bottom: 0,
                justifyContent: "center",
                left: 0,
                position: "absolute",
                right: 0,
                top: 0,
                zIndex: 10,
                alignItems: "center",
                backgroundColor: '#05050570',
                opacity: 1,
            }}>
            <ActivityIndicator size="large" />
        </View>
    );
};