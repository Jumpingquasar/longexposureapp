import FastImage from "react-native-fast-image"
import { aspectratio, deviceWidth } from "../../constants/distances"
import { PostEntity } from "../../store/types/post-model"
import { FlatList, Image, Text, View } from "react-native";
import images from "../../constants/images";
import textStyles from "../../constants/textStyles";
import { ContentType } from "../../store/types/content-model";
import Video from "react-native-video";

interface IPostSearchProps {
    post: PostEntity;
}

export const PostSearch = ({post} : IPostSearchProps) => {

    return(
        <View style={{padding: 1}}>
            
            {
            post.contents[0].contentType == ContentType.Image ? 
            <FastImage style={{width: deviceWidth/3 - 2 , height: deviceWidth/3 - 2}} source={{uri: post.contents[0].contentURI, priority: FastImage.priority.high}}/>
            :
            <Video repeat={true} resizeMode="cover" style={{width: deviceWidth/3 - 2 , height: deviceWidth/3 - 2}} source={{uri: post.contents[0].contentURI}}></Video>
            }
                    
        </View>
    )
}