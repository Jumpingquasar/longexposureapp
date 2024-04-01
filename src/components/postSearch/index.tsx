import { useRef, useState } from "react";
import { ActivityIndicator, Image, Pressable, TouchableWithoutFeedback, View } from "react-native";
import FastImage from "react-native-fast-image";
import Video from "react-native-video";
import colors from "../../constants/colors";
import { ContentEntity, ContentType } from "../../store/types/content-model";
import styles from "./styles";
import { getPlayingSearchVideo } from "../../store/systemSlice/selectors";
import { useDispatch } from "react-redux";
import { setPlayingSearchVideo } from "../../store/systemSlice";
import images from "../../constants/images";

interface IPostSearchProps {
    post: ContentEntity;
}

export const PostSearch = ({post} : IPostSearchProps) => { //SearchScreen post component
    const [buffering, setBuffering] = useState(true)
    const player = useRef(null);

    const playingSearchVideo = getPlayingSearchVideo();
    const dispatch = useDispatch();
    
    const onLoad = () => {  //Sets thumbnail and disables loader
        setBuffering(false)
        player?.current?.seek(1)
    };

    const playVideo = () => { //Onpress, sets playing contentID to redux
        dispatch(setPlayingSearchVideo(post.contentID))
    }

    return(
        <View style={styles.container}>            
            {post.contentType == ContentType.Image ? //Renders Image or Video based on content type
            <>
            <FastImage 
                onLoad={onLoad}
                style={styles.content} 
                source={{uri: post.contentURI, priority: FastImage.priority.high}}
            />
            {buffering && //Loading component
                <View style={styles.videoCover}>
                    <ActivityIndicator color={colors.instagramBlue}  size="small"/>                         
                </View>
            }
            </>
            :
            <>
            <Pressable
                onPress={playVideo}
                >
                <Video
                    ref={player}
                    paused={playingSearchVideo != post.contentID} //Plays the video if the contentID matches Redux state
                    repeat={true}
                    onLoad={onLoad} 
                    resizeMode="cover" 
                    style={styles.content} 
                    source={{uri: post.contentURI}}
                />
            </Pressable>
            {!buffering && playingSearchVideo != post.contentID && //Video indicator Icon
                <View style={styles.videoIcon}>
                    <Image source={images.video}/>                         
                </View>
            }
            {buffering && //Loading component
                <View style={styles.videoCover}>
                    <ActivityIndicator color={colors.instagramBlue}  size="small"/>                         
                </View>
            }
            </>
            }              
        </View>
    )
}