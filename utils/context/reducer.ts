import { ActionNames, ActionTypes } from "./actions";

export interface IStoreStates {
  baseUser: IBaseUser;
  user: IUser | null;
}
export enum UserType {
  USER = "USER",
  COMPANY = "COMPANY",
  ADMIN = "ADMIN",
}

export interface IBaseUser {
  uid: string | null;
  userType: UserType | null;
  isConfirmed: boolean;
}

export interface IEducationList {
  degree: string | null;
  institute: string | null;
  year: string | null;
  info: string | null;
}

export interface IExperienceList {
  position: string | null;
  institute: string | null;
  year: string | null;
  info: string | null;
}

export interface IUser {
  uid: string | null;
  first_name: string | null;
  last_name: string | null;
  userType: UserType;
  profileImageURL: string | null;
  userName: string | null;
  name: string | null;
  currentOccupation: string | null;
  age: string | null;
  birthday: string | null;
  phone: string | null;
  otherEmail: string | null;
  documents: string[] | null;
  email: string | null;
  location: string | null;
  about: string | null;
  desire: {
    desiredOccupation: string[] | null;
    firstChoiceOfWork: string | null;
    secondChoiceOfWork: string | null;
    employmentType: string[] | null;
    annualSalary: string | null;
    previousSalary: string | null;
  } | null;
  profession: string | null;
  otherOccupation: string[] | null;
  education:
    | {
        degree: string | null;
        institute: string | null;
        year: string | null;
        info: string | null;
      }[]
    | null;
  address: {
    Country: string | null;
    postalCode: string | null;
    building: string | null;
  } | null;
  experiences:
    | {
        position: string | null;
        institute: string | null;
        year: string | null;
        info: string | null;
      }[]
    | null;
  skills: string[] | null;
  languages: string[] | null;
}

export const baseUserInitialValues = {
  uid: null,
  userType: null,
  isConfirmed: false,
};

export type IDispatch = (action: ActionTypes) => void;
export const initialState: IStoreStates = {
  baseUser: baseUserInitialValues,
  user: null,
};

export const reducer = (state: IStoreStates, action: ActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case ActionNames.SET_BASE_USER:
      return { ...state, baseUser: payload };
    case ActionNames.SET_USER_DATA:
      return { ...state, user: payload };
    default:
      return state;
  }
};
