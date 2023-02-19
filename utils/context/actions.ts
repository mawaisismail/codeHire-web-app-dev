export enum ActionNames {
  SET_IS_MOBILE = "SET_IS_MOBILE",
}
export type ActionTypes = SetIsMobile;
interface SetIsMobile {
  payload: boolean;
  type: ActionNames.SET_IS_MOBILE;
}
export const setIsMobile = (isMobile: boolean): SetIsMobile => {
  return {
    payload: isMobile,
    type: ActionNames.SET_IS_MOBILE,
  };
};
