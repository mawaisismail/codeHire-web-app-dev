import { IBaseUser, IUser } from "./reducer";
import { ICompany } from "../../constants/interfaces/company";

export enum ActionNames {
  SET_IS_MOBILE = "SET_IS_MOBILE",
  SET_BASE_USER = "SET_BASE_USER",
  SET_USER_DATA = "SET_USER_DATA",
  SET_COMPANY_DATA = "SET_COMPANY_DATA",
}
export type ActionTypes = SetBaseUserAction | setUserAction | setCompanyAction;
interface SetBaseUserAction {
  payload: IBaseUser;
  type: ActionNames.SET_BASE_USER;
}
interface setUserAction {
  payload: IUser;
  type: ActionNames.SET_USER_DATA;
}
interface setCompanyAction {
  payload: ICompany;
  type: ActionNames.SET_COMPANY_DATA;
}

export const setBaseUser = (baseUser: IBaseUser): SetBaseUserAction => {
  return {
    type: ActionNames.SET_BASE_USER,
    payload: baseUser,
  };
};

export const setCompany = (baseUser: ICompany): setCompanyAction => {
  return {
    type: ActionNames.SET_COMPANY_DATA,
    payload: baseUser,
  };
};

export const setUserData = (user: IUser): setUserAction => {
  return {
    type: ActionNames.SET_USER_DATA,
    payload: user,
  };
};
