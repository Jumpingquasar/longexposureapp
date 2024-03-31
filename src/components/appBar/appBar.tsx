import React from "react";
import { View } from "react-native";
import { aspectratio, deviceWidth } from "../../constants/distances";
import { BackButton } from "../backButton/backButton";
import { Divider } from "../divider/divider";

interface IPrimaryButtonProps {
    hasBackButton?: boolean;
    isDivided?: boolean;
    children?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
    isPositioned?: boolean;
}



export function AppBar({children, hasBackButton, isDivided, isPositioned}: IPrimaryButtonProps) {
    return (
        <View style={{ height: aspectratio(60, 'height'), position: isPositioned ? 'absolute' : 'relative', top: 0, justifyContent:'space-between'}}>
            <View/>
            <View style={{width: deviceWidth, justifyContent:'space-between', alignContent: 'center', flexDirection: 'row', alignItems:'center', paddingHorizontal: aspectratio(16, 'width')}}>
                {hasBackButton ? <BackButton/> : <View/>}
                {children}
                <View/>
            </View>
            {isDivided && <Divider/>}
        </View>
    )
}