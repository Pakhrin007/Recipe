export const setTokens = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

// Optional: Add other token-related functions if needed
export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export const clearTokens = () => {
  localStorage.removeItem('accessToken');
};