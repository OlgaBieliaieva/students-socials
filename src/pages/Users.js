import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/users/selectors';
import { fetchUsers } from 'redux/users/operations';
import Header from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { UsersList } from 'components/UsersList/UsersList';

const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  background: '#EBD8FF',
};

export const Users = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main style={pageStyles}>
      <Header />
      {isLoading && !error ? <Loader /> : <UsersList />}
    </main>
  );
};
