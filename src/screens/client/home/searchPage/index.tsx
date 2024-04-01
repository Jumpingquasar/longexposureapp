import { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import { PostSearch } from "../../../../components/postSearch";
import { searchIterationSize } from "../../../../constants/misc";
import { fetchSearchAsync } from "../../../../services/postService";
import { PostEntity } from "../../../../store/types/post-model";
import styles from "./styles";
import { ContentEntity } from "../../../../store/types/content-model";

interface ISearchPageProps {
    searchTerm: string;
}

export const SearchPage = ({ searchTerm } : ISearchPageProps) => {
    const [posts, setPosts] = useState<ContentEntity[]>([]);
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
        setPosts([])
        setTimeout(() =>{
            getContentsScroll();
        }, 2000)
    }, [searchTerm])

    const onEndReached  = () => {
        getContentsScroll();
    }

    
    return(
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.flatList}
                removeClippedSubviews={true}
                numColumns={3}
                keyExtractor={(item, index) => item.contentID}
                data={posts}
                onEndReached={onEndReached}
                renderItem={({ item }) =>  {return (<PostSearch post={item}/>)}}>
            </FlatList>
        </>
    )
}