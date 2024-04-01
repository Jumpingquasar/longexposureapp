import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { BottomLoader } from "../../../../components/bottomLoader";
import { PostFeed } from "../../../../components/postFeed";
import { feedIterationSize } from "../../../../constants/misc";
import { fetchPostsAsync } from "../../../../services/postService";
import { PostEntity } from "../../../../store/types/post-model";
import { FlashList } from "@shopify/flash-list";
import { aspectratio, deviceWidth } from "../../../../constants/distances";
import styles from "./styles";



export const FeedPage = () => {
    const [posts, setPosts] = useState<PostEntity[]>([]);
    const [itemStart, setStart] = useState(0);
    const [isFetching, setIsFetching] = useState(false);

    function getContentsScroll(){ //Calls the fetchPosts API with the number of posts expected in return
        fetchPostsAsync({itemStart, feedIterationSize}).then(async (data) => {
            let newPosts = await JSON.parse(await data.text()) // Parses the response
            setPosts([...posts, ...newPosts]); // Sets the responding posts to the previous posts object
            if (newPosts.length != 0) //Signifies the end of content reach
                setStart(itemStart + feedIterationSize);            
            setIsFetching(false)            
        })
    }
    
    useEffect(() => {
        getContentsScroll();
    }, [])

    const onEndReached  = () => { //Calls the fetch action when user reaches the end of the flatlist     
        setIsFetching(true)  
        getContentsScroll();
    }

    return(
        <View style={styles.flatlist}>
        <FlashList
            estimatedItemSize={deviceWidth}
            showsVerticalScrollIndicator={false}
            data={posts}
            onEndReached ={onEndReached}            
            onEndReachedThreshold={0.2}
            renderItem={({ item }) =>  {return (<PostFeed post={item}/>)}}>
        </FlashList>
        {BottomLoader(isFetching)}
        </View>
    )
}