import { useSelector } from "react-redux";
import { RootState } from "..";

export const getPlayingSearchVideo = () => {
  const playingSearchVideo = useSelector((state: RootState) => state.persistedReducer.system.playingSearchVideo);
  return playingSearchVideo;
};