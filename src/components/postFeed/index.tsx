import FastImage from "react-native-fast-image"
import { aspectratio, deviceWidth } from "../../constants/distances"
import { PostEntity } from "../../store/types/post-model"
import { Image, Text, View } from "react-native";
import images from "../../constants/images";
import textStyles from "../../constants/textStyles";

interface IPostFeedProps {
    post: PostEntity;
    key: number;
}

export const PostFeed = ({post, key} : IPostFeedProps) => {

    return(
        <>
            <View style={{paddingHorizontal: aspectratio(10, 'width'), height: aspectratio(54, 'height'), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                <View  style={{alignItems: 'center', flexDirection: 'row'}}>
                    <FastImage style={{width: 34, height: 34, marginRight: 10, borderRadius: 17}} resizeMode='contain' source={{uri: post.profilePhoto}} />
                    <View>
                        <Text style={textStyles.bodySmallBold} >{post.userName}</Text>
                        {post.location ? <Text>{post.userName}</Text> : <View></View>}
                    </View>
                </View>
                <Image resizeMode='contain' source={images.more} />
            </View>
            <View>
                {/* {post.images.map((image) => <FastImage style={{width: deviceWidth , height: deviceWidth}} source={{uri: image, priority: FastImage.priority.high}}/>)} */}
            </View>
            <View style={{paddingHorizontal: aspectratio(10, 'width'), height: aspectratio(54, 'height'), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                <View style={{width: aspectratio(100, 'width'), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                    <Image resizeMode='contain' source={images.like}/>
                    <Image resizeMode='contain' source={images.comment}/>
                    <Image resizeMode='contain' source={images.message}/>
                </View>
                    <Image resizeMode='contain' source={images.save}/>
            </View>
        </>
    )
}