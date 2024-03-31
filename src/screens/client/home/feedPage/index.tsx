import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { PostFeed } from "../../../../components/postFeed";
import { feedIterationSize } from "../../../../constants/misc";
import { fetchPostsAsync } from "../../../../services/postService";
import { PostEntity } from "../../../../store/types/post-model";



export const FeedPage = () => {
    const [posts, setPosts] = useState<PostEntity[]>([]);
    const [itemStart, setStart] = useState(0);

    function getContentsScroll(){
        fetchPostsAsync({itemStart, feedIterationSize}).then(async (data) => {
            let newPosts = await JSON.parse(await data.text())
            setPosts([...posts, ...newPosts]);
            if (newPosts.length != 0)
                setStart(itemStart + feedIterationSize);
        })
    }
    
    useEffect(() => {
        getContentsScroll();
    }, [])

    const onEndReached  = () => {
        getContentsScroll();
    }

    return(
        <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            onEndReached ={onEndReached}            
            onEndReachedThreshold={0.2}
            renderItem={({ item }) =>  {return (<PostFeed post={item}/>)}}>
        </FlatList>
    )
}