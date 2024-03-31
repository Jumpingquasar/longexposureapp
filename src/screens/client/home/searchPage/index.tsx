import { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import { PostSearch } from "../../../../components/postSearch";
import { searchIterationSize } from "../../../../constants/misc";
import { fetchSearchAsync } from "../../../../services/postService";
import { PostEntity } from "../../../../store/types/post-model";

interface ISearchPageProps {
    searchTerm: string;
}

export const SearchPage = ({ searchTerm } : ISearchPageProps) => {
    const [posts, setPosts] = useState<PostEntity[]>([]);
    const [itemStart, setStart] = useState(0);
    const timeout = useRef(null);
    
    function getContentsScroll(){
        fetchSearchAsync({itemStart, searchIterationSize}).then(async (data) => {
            let newPosts = await JSON.parse(await data.text())
            setPosts([...posts, ...newPosts]);
            if (newPosts.length != 0)
                setStart(itemStart + searchIterationSize);
        })
    }

    useEffect(() => {
        setPosts([])
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() =>{
            getContentsScroll();
        }, 1000)
    }, [searchTerm])

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