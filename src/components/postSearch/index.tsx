import { useRef, useState } from "react";
import { ActivityIndicator, TouchableWithoutFeedback, View } from "react-native";
import FastImage from "react-native-fast-image";
import Video from "react-native-video";
import colors from "../../constants/colors";
import { ContentEntity, ContentType } from "../../store/types/content-model";
import styles from "./styles";
import { getPlayingSearchVideo } from "../../store/systemSlice/selectors";
import { useDispatch } from "react-redux";
import { setPlayingSearchVideo } from "../../store/systemSlice";

interface IPostSearchProps {
    post: ContentEntity;
}

export const PostSearch = ({post} : IPostSearchProps) => {
    const [buffering, setBuffering] = useState(true)
    const player = useRef(null);

    const playingSearchVideo = getPlayingSearchVideo();
    const dispatch = useDispatch();
    
    const onLoad = () => {
        setBuffering(false)
        player?.current?.seek(1)
    };

    const onBuffer = () => {
        setBuffering(true)
    };

    const playVideo = () => {
        dispatch(setPlayingSearchVideo(post.contentID))
    }

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
            <TouchableWithoutFeedback
                onPress={playVideo}
                >
                <Video
                    ref={player}
                    paused={playingSearchVideo != post.contentID}
                    repeat={true}
                    onLoad={onLoad} 
                    onBuffer={onBuffer}
                    resizeMode="cover" 
                    style={styles.content} 
                    source={{uri: post.contentURI}}
                />
            </TouchableWithoutFeedback>
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