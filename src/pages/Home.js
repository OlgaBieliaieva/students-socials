import { Hero } from 'components/Hero/Hero';
const pageStyles = {
  display: 'flex',
  width: '100%',
  height: '100vh',
};

export const Home = () => {
  return (
    <main style={pageStyles}>
      <Hero />
    </main>
  );
};
