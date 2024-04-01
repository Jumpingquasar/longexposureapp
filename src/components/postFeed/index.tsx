import { useRef, useState } from "react";
import { ActivityIndicator, Animated, View, ViewToken } from "react-native";
import FastImage from "react-native-fast-image";
import Video from "react-native-video";
import { ContentType } from "../../store/types/content-model";
import { PostEntity } from "../../store/types/post-model";
import { BottomPost } from "../bottomPost";
import { TopPost } from "../topPost";
import styles from "./styles";
import colors from "../../constants/colors";

interface IPostFeedProps {
    post: PostEntity;
}

export const PostFeed = ({post} : IPostFeedProps) => {
    const [currentPage, setCurrentPage] = useState<number | null>(0);
    const player = useRef<Video>(null);
    const [buffering, setBuffering] = useState(true)

    const onViewableItemsChanged = (info: {viewableItems : ViewToken[]}) => {
        if (info && info.viewableItems.length > 0) {
          const visibleItem = info.viewableItems[0];
          setCurrentPage(visibleItem.index);
        }
    };

    const onLoad = () => {
        setBuffering(false)
    };

    const onBuffer = () => {
        setBuffering(true)
    };

    return(
        <>
            <TopPost post={post} />
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={post.contents}
                pagingEnabled                
                onViewableItemsChanged={onViewableItemsChanged}
                renderItem={({ item }) =>  {
                    return (
                        item.contentType == ContentType.Image ? 
                        <>
                        <FastImage 
                            onLoad={onLoad}
                            style={styles.content} 
                            source={{uri: item.contentURI, priority: FastImage.priority.high}}/>
                        {buffering && 
                            <View style={styles.videoCover}>
                                <ActivityIndicator color={colors.instagramBlue} size="large"/>                         
                        </View>}
                        </>
                        :
                        <>
                        <Video 
                            ref={player} 
                            onLoad={onLoad} 
                            onBuffer={onBuffer}
                            repeat={true} 
                            resizeMode="cover" 
                            style={styles.content} 
                            source={{uri: item.contentURI}}/>
                        {buffering && 
                            <View style={styles.videoCover}>
                                <ActivityIndicator color={colors.instagramBlue}  size="large"/>                         
                        </View>}
                        </>
                    )                    
                }}
            />
            <BottomPost post={post} currentPage={currentPage}/>
        </>
    )
}