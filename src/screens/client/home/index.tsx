import { useState } from "react";
import { Image, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppBar } from "../../../components/appBar/appBar";
import { PrimaryInputArea } from "../../../components/primaryInputArea";
import images from "../../../constants/images";
import { SearchPage } from "./searchPage";
import { FeedPage } from "./feedPage";

export const Home = () => {
    const [searchText, setSearchText] = useState('');

    return(
        <View style={{alignItems:'center', flex: 1, backgroundColor: Colors.white}}>
            <AppBar isDivided={true}>
                <Image style={{height: 33, resizeMode: 'contain', alignSelf: 'center', alignContent: 'center'}} source={images.instagramLogo}/>
            </AppBar>
            <PrimaryInputArea onChange={(text) => setSearchText(text)} hintText="Search" isSearch={true}/>
            {searchText.length != 0 ? <SearchPage/> : <FeedPage/>}
        </View>
    )
}