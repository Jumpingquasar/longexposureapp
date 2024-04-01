import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { PostSearch } from "../../../../components/postSearch";
import { searchIterationSize } from "../../../../constants/misc";
import { fetchSearchAsync } from "../../../../services/postService";
import { ContentEntity } from "../../../../store/types/content-model";
import styles from "./styles";
import { FlashList } from "@shopify/flash-list";
import { aspectratio, deviceWidth } from "../../../../constants/distances";

interface ISearchPageProps {
    searchTerm: string;
}

export const SearchPage = ({ searchTerm } : ISearchPageProps) => {
    const [posts, setPosts] = useState<ContentEntity[]>([]);
    const [itemStart, setStart] = useState(0);
    
    function getContentsScroll(){ //Calls the fetchSearch API with the number of posts expected in return. No search query is implemented.
        fetchSearchAsync({itemStart, searchIterationSize}).then(async (data) => {
            let newPosts = await JSON.parse(await data.text()) //Parses the response
            setPosts([...posts, ...newPosts]); //Sets the responding posts to the previous posts object
            if (newPosts.length != 0) //Signifies the end of content reach
                setStart(itemStart + searchIterationSize);
        })
    }

    useEffect(() => { //Introduces a delay to accommodate the fast searchTerm onChange 
        setPosts([])
        setTimeout(() =>{
            getContentsScroll();
        }, 2000)
    }, [searchTerm])

    const onEndReached  = () => {//Calls the fetch action when user reaches the end of the flatlist 
        getContentsScroll();
    }

    
    return(
        <View style={styles.flatList} >
            <FlashList
                estimatedItemSize={134}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={true}
                numColumns={3}
                data={posts}
                onEndReached={onEndReached}
                renderItem={({ item }) =>  {
                    return (<PostSearch post={item}/>)
                    }}>
            </FlashList>
        </View>
    )
}