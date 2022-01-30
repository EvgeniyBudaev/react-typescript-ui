import { AxiosError } from "axios";
import { Reducer } from "redux";
import { AccountActionsType, ActionTypes } from "services/account";
import { getCookie } from "utils/coockie";

interface IAccountState {
  accessToken: string | null;
  refreshToken: string | null;
  tokenRequest: boolean;
  tokenFailed: boolean;
  logoutRequest: boolean;
  logoutFailed: boolean;
  error: AxiosError | null;
}

const initialState: IAccountState = {
  accessToken: getCookie("accessToken") || null,
  refreshToken: getCookie("refreshToken") || null,
  tokenRequest: false,
  tokenFailed: false,
  logoutRequest: false,
  logoutFailed: false,
  error: null,
};

export const reducer: Reducer<IAccountState, AccountActionsType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.TOKEN_REQUEST: {
      return {
        ...state,
        tokenRequest: true,
        tokenFailed: false,
        error: null,
        success: false,
      };
    }
    case ActionTypes.TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
        tokenRequest: false,
      };
    case ActionTypes.TOKEN_FAILED:
      return {
        ...state,
        tokenRequest: false,
        tokenFailed: true,
        error: action.payload,
      };
    case ActionTypes.LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
        error: null,
      };
    }
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        accessToken: "",
        refreshToken: "",
      };
    case ActionTypes.LOGOUT_FAILED:
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
