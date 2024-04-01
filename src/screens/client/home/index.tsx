import { useState } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppBar } from "../../../components/appBar/appBar";
import { PrimaryInputArea } from "../../../components/primaryInputArea";
import images from "../../../constants/images";
import { FeedPage } from "./feedPage";
import { SearchPage } from "./searchPage";
import styles from "./styles";

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <SafeAreaView style={styles.container}>
            <AppBar isDivided={true}>
                <Image source={images.camera}/>
                <Image style={styles.logo} source={images.instagramLogo}/>
                <Image source={images.message}/>
            </AppBar>
            <PrimaryInputArea onChange={(text) => setSearchTerm(text)} hintText="Search" isSearch={true}/>
            {/* Conditional page view based on search value */}
            {searchTerm.length != 0 ? <SearchPage searchTerm={searchTerm} /> : <FeedPage/>} 
        </SafeAreaView>
    )
}