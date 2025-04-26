import axios from 'axios';

export const getUserData = async (userId: string, token: string) => {
  try {
    console.log("Making request to:", `https://localhost:7043/api/users/${userId}`);
    const response = await axios.get(`https://localhost:7043/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error fetching user data:', error.response?.data || error.message);
    throw error;
  }
};

export const updateUserProfile = async (userId: string, data: { name: string; email: string }, token: string) => {
  try {
    console.log("Making request to:", `https://localhost:7043/api/users/profile/${userId}`);
    const response = await axios.put(
      `https://localhost:7043/api/users/profile/${userId}`,
      {
        fullName: data.name,
        email: data.email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Error updating user profile:', error.response?.data || error.message);
    throw error;
  }
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export const setTokens = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const clearTokens = () => {
  localStorage.removeItem('accessToken');
};