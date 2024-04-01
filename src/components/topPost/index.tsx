import { Image, View } from "react-native"
import FastImage from "react-native-fast-image"
import images from "../../constants/images"
import textStyles from "../../constants/textStyles"
import { PostEntity } from "../../store/types/post-model"
import { CustomText } from "../customText/customText"
import styles from "./styles"

interface ITopPostProps {
    post: PostEntity;
}

export const TopPost = ({post} : ITopPostProps) => { //Content above HomeScreen post

    return(
        <View style={styles.container}>
            <View  style={styles.innerContainer}>
                <FastImage style={styles.profilePhoto} resizeMode='contain' source={{uri: post.profilePhoto}} />
                <View>
                    <CustomText style={textStyles.bodySmallBold} >{post.userName}</CustomText>
                    {post.location ? <CustomText>{post.userName}</CustomText> : <View></View>}
                </View>
            </View>
            <Image resizeMode='contain' source={images.more} />
        </View>
    )
}