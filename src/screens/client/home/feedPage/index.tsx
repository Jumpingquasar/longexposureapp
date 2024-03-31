import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { PostFeed } from "../../../../components/postFeed";
import { fetchPostsAsync } from "../../../../services/postService";
import { PostEntity } from "../../../../store/types/post-model";



export const FeedPage = () => {
    const [posts, setPosts] = useState<PostEntity[]>([]);

    useEffect(() => {
        fetchPostsAsync().then(async (data) => {setPosts(await JSON.parse(await data.text()))})
    }, [])

    return(
        <FlatList
            data={posts}
            renderItem={({ item }) =>  {return (<PostFeed post={item}/>)}}>
        </FlatList>
    )
}