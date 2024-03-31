import { useEffect, useState } from "react";
import { fetchSearchAsync } from "../../../../services/postService";
import { PostEntity } from "../../../../store/types/post-model";
import { FlatList } from "react-native";
import { PostSearch } from "../../../../components/postSearch";

interface ISearchPageProps {
    query: string;
}

export const SearchPage = ({ query } : ISearchPageProps) => {
    const [posts, setPosts] = useState<PostEntity[]>([]);

    useEffect(() => {
        fetchSearchAsync(query).then(async (data) => {setPosts(await JSON.parse(await data.text()))})
    }, [query])
    
    return(
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{flexDirection: 'column'}}
                numColumns={3}
                data={posts}
                renderItem={({ item }) =>  {return (<PostSearch post={item}/>)}}>
            </FlatList>
        </>
    )
}