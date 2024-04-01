import { Image, View } from "react-native"
import images from "../../constants/images"
import textStyles from "../../constants/textStyles"
import { PostEntity } from "../../store/types/post-model"
import { CustomText } from "../customText/customText"
import { PageIndicator } from "../pageIndicator"
import styles from "./styles"

interface IBottomPostProps {
    post: PostEntity;
    currentPage: number | null;
}

export const BottomPost = ({post, currentPage} : IBottomPostProps) => { //Content under HomeScreen post

    return(
        <View style={styles.container}>
            <View style={styles.middleContainer}>
                <View style={styles.innerContainer}>
                    <Image resizeMode='contain' source={images.like}/>
                    <Image resizeMode='contain' source={images.comment}/>
                    <Image resizeMode='contain' source={images.message}/>
                </View>
                {post.contents.length != 1 && <PageIndicator currentIndex={currentPage} data={post.contents}/>} 
                <Image resizeMode='contain' source={images.save}/>
            </View>
            <CustomText style={textStyles.bodySmall}>Liked by <CustomText style={textStyles.bodySmallBold}>{post.likeCount} users</CustomText></CustomText>
            <CustomText style={textStyles.bodySmall}><CustomText style={textStyles.bodySmallBold}>{post.userName}</CustomText> {post.caption}</CustomText>
        </View>
    )
}