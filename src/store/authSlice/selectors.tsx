import { useSelector } from "react-redux";
import { RootState } from "..";

export const getUser = () => {
  const user = useSelector((state: RootState) => state.persistedReducer.auth.user);
  return user;
};