import { IBaseUser } from "./reducer";

export enum ActionNames {
  SET_IS_MOBILE = "SET_IS_MOBILE",
  SET_BASE_USER = "SET_BASE_USER",
}
export type ActionTypes = SetBaseUserAction;
interface SetBaseUserAction {
  payload: IBaseUser;
  type: ActionNames.SET_BASE_USER;
}

export const setBaseUser = (baseUser: IBaseUser): SetBaseUserAction => {
  return {
    type: ActionNames.SET_BASE_USER,
    payload: baseUser,
  };
};
