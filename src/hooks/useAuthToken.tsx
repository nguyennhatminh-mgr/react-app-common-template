import { TOKEN } from 'constants/localStorageKeys';

export const useAuthToken = () => {
  const localData = localStorage.getItem(TOKEN);
  let accessToken = '';
  let refreshToken = '';
  if (localData) {
    accessToken = JSON.parse(localData).accessToken;
    refreshToken = JSON.parse(localData).refreshToken;
  }

  return { accessToken, refreshToken };
};
