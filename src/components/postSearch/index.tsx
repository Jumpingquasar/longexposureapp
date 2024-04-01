import { ActivityIndicator, View } from "react-native";
import FastImage from "react-native-fast-image";
import Video from "react-native-video";
import { ContentType } from "../../store/types/content-model";
import { PostEntity } from "../../store/types/post-model";
import styles from "./styles";
import { useState } from "react";
import colors from "../../constants/colors";

interface IPostSearchProps {
    post: PostEntity;
}

export const PostSearch = ({post} : IPostSearchProps) => {
    const [buffering, setBuffering] = useState(true)

    const onLoad = () => {
        setBuffering(false)
    };

    const onBuffer = () => {
        setBuffering(true)
    };
    return(
        <View style={styles.container}>            
            {post.contents[0].contentType == ContentType.Image ?
            <>
            <FastImage 
                onLoad={onLoad}
                style={styles.content} 
                source={{uri: post.contents[0].contentURI, priority: FastImage.priority.high}}
            />
            {buffering && 
                <View style={styles.videoCover}>
                    <ActivityIndicator color={colors.instagramBlue}  size="small"/>                         
                </View>
            }
            </>
            :
            <>
            <Video 
                muted={true} 
                repeat={true}  
                onLoad={onLoad} 
                onBuffer={onBuffer}
                resizeMode="cover" 
                style={styles.content} 
                source={{uri: post.contents[0].contentURI}}
            />
            {buffering && 
                <View style={styles.videoCover}>
                    <ActivityIndicator color={colors.instagramBlue}  size="small"/>                         
                </View>
            }
            </>
            }              
        </View>
    )
}