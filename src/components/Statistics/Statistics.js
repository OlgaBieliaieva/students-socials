import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/selectors';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import css from './Statistics.module.css';

export const Statistics = () => {
  const users = useSelector(selectUsers);

  const totalTweets = users.reduce((value, user) => {
    return value + user.tweets;
  }, 0);

  return (
    <div className={css.statContainer}>
      <div>
      <LeaderboardIcon/>
      <p>{new Intl.NumberFormat().format(users.length)} users</p>
      </div>
      <div>
      <LeaderboardIcon/>
      <p>{new Intl.NumberFormat().format(totalTweets)} tweets</p>
      </div>
      
      
      
    </div>
  );
};
