import { createContext, FC, ReactNode, useReducer } from "react";
import { IDispatch, initialState, IStoreStates, reducer } from "./reducer";

export const GlobalContext = createContext<[IStoreStates, IDispatch]>([
  initialState,
  () => null,
]);
interface IGlobalProvider {
  children: ReactNode;
}

export const GlobalProvider: FC<IGlobalProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

//HOw To Use Context Api in component
// const [{ isMobile }, dispatch] = useContext(GlobalContext);
// useEffect(() => {
//   dispatch(setIsMobile(true));
// }, []);
