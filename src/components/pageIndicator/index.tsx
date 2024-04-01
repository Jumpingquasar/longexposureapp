import React from 'react';
import { View } from 'react-native';
import colors from '../../constants/colors';
import { ContentEntity } from '../../store/types/content-model';
import styles from './styles';
export interface IPageIndicatorProps {
    data: ContentEntity[];
    currentIndex: number | null;
}

export const PageIndicator = ({data, currentIndex}: IPageIndicatorProps) => {

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            {data.map((_, index) => {
                return (
                    <View key={index} 
                        style={[{backgroundColor: currentIndex == index ? colors.instagramBlue : colors.inputAreaBorderGray}, styles.indicator]}/>
                    )
            })}
        </View>
    </View>
  );
};


