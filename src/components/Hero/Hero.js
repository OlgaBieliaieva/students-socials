import { Box } from '@mui/material';
import { Link } from '@mui/material';
import css from './Hero.module.css';

export const Hero = () => {
  return (
    <Box component={'section'} className={css.heroContainer}>
      <h1>
        Are you interested in the news of the student community?
      </h1>
      <Link className={css.heroButton}>Join StudS</Link>
      
    </Box>
  );
};
