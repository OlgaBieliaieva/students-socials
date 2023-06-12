import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};
