import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth.api';
import { setTokens } from '../lib/token';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { accessToken, refreshToken } = await login({ email: 'user@example.com', password: 'password' });
    setTokens(accessToken, refreshToken);
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginPage;
