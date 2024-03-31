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
        <View style={{flexDirection: 'row', width: aspectratio(25, 'width'), justifyContent: 'space-between'}}>
            {data.map((_, index) => {
                return (<View style={{width:10, height: 10, borderRadius: 10, backgroundColor: currentIndex == index ? colors.instagramBlue : colors.inputAreaBorderGray}}></View>)
            })}
        </View>
    </View>
  );
};


