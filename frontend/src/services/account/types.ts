import { AxiosError } from "axios";
import { ActionTypes } from "./actionTypes";

export interface ITokenRequest {
  email: string;
  password: string;
}

export interface ITokenResponse {
  access: string;
  refresh: string;
}

export interface IActionTokenRequest {
  type: ActionTypes.TOKEN_REQUEST;
}

export interface IActionTokenSuccess {
  type: ActionTypes.TOKEN_SUCCESS;
  payload: ITokenResponse;
}

export interface IActionTokenFailed {
  type: ActionTypes.TOKEN_FAILED;
  payload: AxiosError;
}

export interface IActionLogoutRequest {
  type: ActionTypes.LOGOUT_REQUEST;
}

export interface IActionLogoutSuccess {
  type: ActionTypes.LOGOUT_SUCCESS;
}

export interface IActionLogoutFailed {
  type: ActionTypes.LOGOUT_FAILED;
  payload: AxiosError;
}

export type AccountActionsType =
  | IActionTokenRequest
  | IActionTokenSuccess
  | IActionTokenFailed
  | IActionLogoutRequest
  | IActionLogoutSuccess
  | IActionLogoutFailed;
