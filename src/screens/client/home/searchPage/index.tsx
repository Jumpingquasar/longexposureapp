import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { PostSearch } from "../../../../components/postSearch";
import { searchIterationSize } from "../../../../constants/misc";
import { fetchSearchAsync } from "../../../../services/postService";
import { PostEntity } from "../../../../store/types/post-model";

interface ISearchPageProps {
    query: string;
}

export const SearchPage = ({ query } : ISearchPageProps) => {
    const [posts, setPosts] = useState<PostEntity[]>([]);
    const [itemStart, setStart] = useState(0);
    
    function getContentsScroll(){
        fetchSearchAsync({itemStart, searchIterationSize}).then(async (data) => {
            let newPosts = await JSON.parse(await data.text())
            setPosts([...posts, ...newPosts]);
            if (newPosts.length != 0)
                setStart(itemStart + searchIterationSize);
        })
    }

    useEffect(() => {
        getContentsScroll();
    }, [])

    const onEndReached  = () => {
        getContentsScroll();
    }

    
    return(
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{flexDirection: 'column'}}
                numColumns={3}
                data={posts}
                onEndReached={onEndReached}
                renderItem={({ item }) =>  {return (<PostSearch post={item}/>)}}>
            </FlatList>
        </>
    )
}