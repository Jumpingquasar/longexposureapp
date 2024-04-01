import React from "react";
import { View } from "react-native";
import { BackButton } from "../backButton/backButton";
import { Divider } from "../divider/divider";
import styles from "./styles";

interface IPrimaryButtonProps {
    hasBackButton?: boolean;
    isDivided?: boolean;
    children?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
    isPositioned?: boolean;
}

export const AppBar = ({children, hasBackButton, isDivided, isPositioned}: IPrimaryButtonProps) => {
    return (
        <View style={[{position: isPositioned ? 'absolute' : 'relative'}, styles.container]}>
            <View/>
            <View style={styles.innerContainer}>
                {hasBackButton ? <BackButton/> : <></>}
                {children}
                <></>
            </View>
            {isDivided && <Divider/>}
        </View>
    )
}