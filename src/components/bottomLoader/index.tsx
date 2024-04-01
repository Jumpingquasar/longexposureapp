import { ActivityIndicator, View } from "react-native";
import colors from "../../constants/colors";
import styles from "./styles";

export const BottomLoader = (isFetching: boolean) => { //Refresh animation in case of FlatList end
    return isFetching ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.instagramBlue} />
      </View>
    ) : null;
  };