import { useRef, useState } from "react";
import { Animated, ViewToken } from "react-native";
import FastImage from "react-native-fast-image";
import Video from "react-native-video";
import { ContentType } from "../../store/types/content-model";
import { PostEntity } from "../../store/types/post-model";
import { BottomPost } from "../bottomPost";
import { TopPost } from "../topPost";
import styles from "./styles";

interface IPostFeedProps {
    post: PostEntity;
}

export const PostFeed = ({post} : IPostFeedProps) => {
    const [currentPage, setCurrentPage] = useState<number | null>(0);
    const player = useRef<Video>(null);

    const onViewableItemsChanged = (info: {viewableItems : ViewToken[]}) => {
        if (info && info.viewableItems.length > 0) {
          const visibleItem = info.viewableItems[0];
          setCurrentPage(visibleItem.index);
        }
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
                        <FastImage 
                            style={styles.content} 
                            source={{uri: item.contentURI, priority: FastImage.priority.high}}/>
                        :
                        <Video 
                            ref={player} 
                            onLoad={() => {player.current && player.current.seek(0)}} 
                            repeat={true} 
                            resizeMode="cover" 
                            style={styles.content} 
                            source={{uri: item.contentURI}}/>
                    )                    
                }}
            />
            <BottomPost post={post} currentPage={currentPage}/>
        </>
    )
}