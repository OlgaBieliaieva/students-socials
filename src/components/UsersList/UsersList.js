import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/selectors';
import { UserCard } from 'components/UserCard/UserCard';
import css from './UsersList.module.css';

export const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    users.length > 0 && (
      <ul className={css.usersList}>
        <UserCard />
      </ul>
    )
  );
};
