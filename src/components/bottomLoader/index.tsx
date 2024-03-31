import { ActivityIndicator, View } from "react-native";
import colors from "../../constants/colors";

export const BottomLoader = (isFetching: boolean) => {
    return isFetching ? (
      <View style={{ elevation: 10, alignItems: "center", position: 'absolute', bottom: 10 }}>
        <ActivityIndicator size="large" color={colors.instagramBlue} />
      </View>
    ) : null;
  };