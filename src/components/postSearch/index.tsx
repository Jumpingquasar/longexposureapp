import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import FastImage from "react-native-fast-image";
import colors from "../../constants/colors";
import { ContentEntity, ContentType } from "../../store/types/content-model";
import styles from "./styles";
import Video from "react-native-fast-video";

interface IPostSearchProps {
    post: ContentEntity;
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
            {post.contentType == ContentType.Image ?
            <>
            <FastImage 
                onLoad={onLoad}
                style={styles.content} 
                source={{uri: post.contentURI, priority: FastImage.priority.high}}
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
                source={{uri: post.contentURI}}
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