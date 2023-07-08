import { IBaseUser, IUser } from "./reducer";

export enum ActionNames {
  SET_IS_MOBILE = "SET_IS_MOBILE",
  SET_BASE_USER = "SET_BASE_USER",
  SET_USER_DATA = "SET_USER_DATA",
}
export type ActionTypes = SetBaseUserAction | setUserAction;
interface SetBaseUserAction {
  payload: IBaseUser;
  type: ActionNames.SET_BASE_USER;
}
interface setUserAction {
  payload: IUser;
  type: ActionNames.SET_USER_DATA;
}

export const setBaseUser = (baseUser: IBaseUser): SetBaseUserAction => {
  return {
    type: ActionNames.SET_BASE_USER,
    payload: baseUser,
  };
};

export const setUserData = (user: IUser): setUserAction => {
  return {
    type: ActionNames.SET_USER_DATA,
    payload: user,
  };
};
