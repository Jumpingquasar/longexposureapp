import { useState } from "react";
import { Image, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppBar } from "../../../components/appBar/appBar";
import { PrimaryInputArea } from "../../../components/primaryInputArea";
import images from "../../../constants/images";
import { SearchPage } from "./searchPage";
import { FeedPage } from "./feedPage";

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <View style={{alignItems:'center', flex: 1, backgroundColor: Colors.white}}>
            <AppBar isDivided={true}>
                <Image source={images.camera}/>
                <Image style={{height: 33, resizeMode: 'contain', alignSelf: 'center', alignContent: 'center'}} source={images.instagramLogo}/>
                <Image source={images.message}/>
            </AppBar>
            <PrimaryInputArea onChange={(text) => setSearchTerm(text)} hintText="Search" isSearch={true}/>
            {searchTerm.length != 0 ? <SearchPage searchTerm={searchTerm} /> : <FeedPage/>}
        </View>
    )
}