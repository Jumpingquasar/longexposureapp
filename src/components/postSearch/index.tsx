import { View } from "react-native";
import FastImage from "react-native-fast-image";
import Video from "react-native-video";
import { ContentType } from "../../store/types/content-model";
import { PostEntity } from "../../store/types/post-model";
import styles from "./styles";

interface IPostSearchProps {
    post: PostEntity;
}

export const PostSearch = ({post} : IPostSearchProps) => {

    return(
        <View style={styles.container}>            
            {post.contents[0].contentType == ContentType.Image ? 
            <FastImage 
                style={styles.content} 
                source={{uri: post.contents[0].contentURI, priority: FastImage.priority.high}}
            />  :
            <Video 
                muted={true} 
                repeat={true} 
                resizeMode="cover" 
                style={styles.content} 
                source={{uri: post.contents[0].contentURI}}
            />}                    
        </View>
    )
}