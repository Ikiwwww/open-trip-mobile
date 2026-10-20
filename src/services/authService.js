import {
  loginApi,
  registerApi,
} from "../api/authApi";

import {
  saveToken,
  removeToken,
} from "./tokenService";

export const login = async (data) => {

  const res = await loginApi(data);

  await saveToken(res.data.token);

  return res.data.user;
};

export const register = async (data) => {

  const res = await registerApi(data);

  return res.data;
};

export const getProfile = async () => {

  const res = await profileApi();

  return res.data;
};

export const logout = async () => {

  await removeToken();
};