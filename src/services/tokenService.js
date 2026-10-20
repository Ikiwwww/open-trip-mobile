import { Preferences } from "@capacitor/preferences";

const TOKEN_KEY = "access_token";

export const saveToken = async (token) => {
  await Preferences.set({
    key: TOKEN_KEY,
    value: token,
  });
};

export const getToken = async () => {
  const { value } = await Preferences.get({
    key: TOKEN_KEY,
  });

  return value;
};

export const removeToken = async () => {
  await Preferences.remove({
    key: TOKEN_KEY,
  });
};