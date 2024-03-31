import { useSelector } from "react-redux";
import { RootState } from "..";

export const getLoading = () => {
  const loading = useSelector((state: RootState) => state.persistedReducer.system.loading);
  return loading;
};