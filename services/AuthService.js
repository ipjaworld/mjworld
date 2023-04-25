import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

export default function useAuthService() {
  const login = async (user) => {
    try {
      const response = await axios.post(API_URL + 'signin', {
        username: user.username,
        password: user.password,
      });

      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
  };

  const autoLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      return user;
    } else {
      return null;
    }
  };

  return {
    login,
    logout,
    autoLogin,
  };
}
