import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { PostFeed } from "../../../../components/postFeed";
import { fetchPostsAsync } from "../../../../services/postService";
import { PostEntity } from "../../../../store/types/post-model";



export const FeedPage = () => {
    const [posts, setPosts] = useState<PostEntity[]>([]);

    useEffect(() => {
        fetchPostsAsync().then(async (data) => {setPosts(await JSON.parse(await data.text()))})
    }, [])

    return(
        <ScrollView>
            {posts.map((post, key)=>{return(<PostFeed key={key} post={post}/>)})}
        </ScrollView>
    )
}