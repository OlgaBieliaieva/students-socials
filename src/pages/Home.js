import { Hero } from "components/Hero/Hero";
const pageStyles = {
  display: 'flex',
  width: '100%',
  height: '100vh',
};

function Home() {
  return (
    <main style={pageStyles}>
        <Hero/>
      
    </main>
  );
}
export default Home;
