import { useState } from "react";
import { Image, View } from "react-native";
import { AppBar } from "../../../components/appBar/appBar";
import { PrimaryInputArea } from "../../../components/primaryInputArea";
import images from "../../../constants/images";
import { SearchPage } from "./searchPage";
import { FeedPage } from "./feedPage";
import styles from "./styles";

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <View style={styles.container}>
            <AppBar isDivided={true}>
                <Image source={images.camera}/>
                <Image style={styles.logo} source={images.instagramLogo}/>
                <Image source={images.message}/>
            </AppBar>
            <PrimaryInputArea onChange={(text) => setSearchTerm(text)} hintText="Search" isSearch={true}/>
            {/* Conditional page view based on search value */}
            {searchTerm.length != 0 ? <SearchPage searchTerm={searchTerm} /> : <FeedPage/>} 
        </View>
    )
}