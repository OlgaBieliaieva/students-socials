import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import css from './Hero.module.css';

export const Hero = () => {
  return (
    <>
      <Box component={'section'} className={css.heroContainer}></Box>
      <Box component={'section'} className={css.heroContent}>
        <h1>
          Are you interested in the news of the student community?
          <br />
          Join us and find new friends
        </h1>
        <Link to="/users" className={css.heroButton}>
          Join StudS
        </Link>
      </Box>
    </>
  );
};
