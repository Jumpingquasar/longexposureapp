import { Animated, Image, Text, View, ViewToken } from "react-native";
import FastImage from "react-native-fast-image";
import { aspectratio, deviceWidth } from "../../constants/distances";
import images from "../../constants/images";
import textStyles from "../../constants/textStyles";
import { ContentType } from "../../store/types/content-model";
import { PostEntity } from "../../store/types/post-model";
import { PageIndicator } from "../pageIndicator";
import { useRef, useState } from "react";
import Video from "react-native-video";

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
            <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={post.contents}
            pagingEnabled
            
            onViewableItemsChanged={onViewableItemsChanged}
            renderItem={({ item }) =>  {
                return (
                    item.contentType == ContentType.Image ? 
                    <FastImage style={{width: deviceWidth , height: deviceWidth}} source={{uri: item.contentURI, priority: FastImage.priority.high}}/>
                    :
                    <Video ref={player} onLoad={() => {player.current && player.current.seek(0)}} repeat={true} resizeMode="cover" style={{width: deviceWidth , height: deviceWidth}} source={{uri: item.contentURI}}></Video>
                )                    
            }}
            />
            <View style={{paddingHorizontal: aspectratio(10, 'width'), height: aspectratio(54, 'height'), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                <View style={{width: aspectratio(100, 'width'), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                    <Image resizeMode='contain' source={images.like}/>
                    <Image resizeMode='contain' source={images.comment}/>
                    <Image resizeMode='contain' source={images.message}/>
                </View>
                {post.contents.length != 1 && <PageIndicator currentIndex={currentPage} data={post.contents}/>} 
                <Image resizeMode='contain' source={images.save}/>
            </View>
        </>
    )
}