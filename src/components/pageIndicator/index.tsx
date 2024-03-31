import React from 'react';
import {
    View
} from 'react-native';
import { ContentEntity } from '../../store/types/content-model';
import { aspectratio, deviceWidth } from '../../constants/distances';
import colors from '../../constants/colors';
export interface IPageIndicatorProps {
    data: ContentEntity[];
    currentIndex: number | null;
}

export const PageIndicator = ({data, currentIndex}: IPageIndicatorProps) => {

  return (
    <View style={{width: deviceWidth, justifyContent: 'center', alignItems: 'center', position:'absolute'}}>
        <View style={{flexDirection: 'row', width: aspectratio(18, 'width'), justifyContent: 'space-between'}}>
            {data.map((_, index) => {
                return (<View key={index} style={{width:6, height: 6, borderRadius: 6, backgroundColor: currentIndex == index ? colors.instagramBlue : colors.inputAreaBorderGray}}></View>)
            })}
        </View>
    </View>
  );
};


