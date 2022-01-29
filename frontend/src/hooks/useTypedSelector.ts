import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "services/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
