import { useNavigate } from 'react-router-dom';
import { removeTokens } from '../lib/token';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeTokens();
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default DashboardPage;
