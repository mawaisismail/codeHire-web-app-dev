import { ActionNames, ActionTypes } from "./actions";

export interface IStoreStates {
  isMobile: boolean;
}
export type IDispatch = (action: ActionTypes) => void;
export const initialState: IStoreStates = {
  isMobile: false,
};

export const reducer = (state: IStoreStates, action: ActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case ActionNames.SET_IS_MOBILE:
      return { ...state, isMobile: payload };
    default:
      return state;
  }
};
