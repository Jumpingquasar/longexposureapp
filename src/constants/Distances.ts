import { Dimensions } from "react-native";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;
const designHeight = 736;
const designWidth = 414;

export const aspectratio = (value: number, wh: string) => {
  switch (wh) {
    case "width":
      return (deviceWidth * value) / designWidth as number;
    case "height":
      return (deviceHeight * value) / designHeight as number;
    default:
      return 0
  }
};