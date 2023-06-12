import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, selectFollowings } from 'redux/users/selectors';
import { refreshFollowings } from 'redux/users/operations';
import cardLogo from '../../images/cardLogo.png';
import cardImage from '../../images/cardImage.png';
import css from './UserCard.module.css';

export const UserCard = () => {
  const users = useSelector(selectUsers);
  const followings = useSelector(selectFollowings);
  const dispatch = useDispatch();

  const followHandler = e => {
    let userToUpdate = {};
    const targetId = e.target.parentNode.id;
    const action = e.target.textContent;

    users.map(user => {
      if (user.id === targetId) {
        userToUpdate = { ...user };

        switch (action) {
          case 'follow':
            return (userToUpdate.followers = user.followers + 1);

          case 'following':
            return (userToUpdate.followers = user.followers - 1);

          default:
            break;
        }
      }
      return null;
    });

    dispatch(refreshFollowings(userToUpdate));
  };

  return users.map(({ avatar, username, tweets, followers, id }) => {
    return (
      <li className={css.cardContainer} key={id} id={id}>
        <img
          className={css.cardLogo}
          src={cardLogo}
          alt="go it"
          width={76}
          height={22}
        />
        <img src={cardImage} alt="go it" width={308} height={168} />
        <span className={css.cardDecor}></span>
        <img
          className={css.cardAvatar}
          src={avatar}
          alt={username}
          width={64}
          height={64}
        />
        <div className={css.cardContent}>
          {/* <p>{username}</p> */}
          <p>{tweets} tweets</p>
          <p>{followers} followers</p>
        </div>
        {followings.includes(id) ? (
          <button
            className={css.followButton}
            style={{ background: '#5CD3A8' }}
            type="button"
            onClick={followHandler}
          >
            following
          </button>
        ) : (
          <button
            className={css.followButton}
            style={{ background: '#EBD8FF' }}
            type="button"
            onClick={followHandler}
          >
            follow
          </button>
        )}
      </li>
    );
  });
};
