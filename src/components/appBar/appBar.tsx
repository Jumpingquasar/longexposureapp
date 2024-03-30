import React, { Component } from "react";
import { StatusBar, Text, View } from "react-native";
import { aspectratio, deviceWidth } from "../../constants/distances";
import { Divider } from "../divider/divider";
import { BackButton } from "../backButton/backButton";

interface IPrimaryButtonProps {
    hasBackButton?: boolean;
    isDivided?: boolean;
    leftComponent?: undefined;
    centerComponent?: undefined;
    rightComponent?: undefined;
    children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
}



export function AppBar({children, hasBackButton, isDivided}: IPrimaryButtonProps) {
    return (
        <View style={{ height: aspectratio(40, 'height'), position:'absolute', top: 0, justifyContent:'space-between'}}>
            <View></View>
            <View style={{width: deviceWidth, justifyContent:'space-between', alignContent: 'center', flexDirection: 'row', alignItems:'center', paddingHorizontal: aspectratio(16, 'width')}}>
                {hasBackButton && <BackButton/>}
                {children}
            </View>
            {isDivided && <Divider/>}
        </View>
    )
}