import { ActionNames, ActionTypes } from "./actions";

export interface IStoreStates {
  baseUser: IBaseUser;
}
export enum UserType {
  USER = "USER",
  COMPANY = "COMPANY",
  ADMIN = "ADMIN",
}

export interface IBaseUser {
  uid: string;
  userType: UserType | null;
  isConfirmed: boolean;
}

export const baseUserInitialValues = {
  uid: "",
  userType: null,
  isConfirmed: false,
};

export type IDispatch = (action: ActionTypes) => void;
export const initialState: IStoreStates = {
  baseUser: baseUserInitialValues,
};

export const reducer = (state: IStoreStates, action: ActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case ActionNames.SET_BASE_USER:
      return { ...state, baseUser: payload };
    default:
      return state;
  }
};
