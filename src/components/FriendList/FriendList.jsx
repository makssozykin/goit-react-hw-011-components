import css from './FriendList.module.css';
import { FriendItem } from './FriendItem/FriendItem';

export const FriendList = friends => {
  const friendList = friends.friends;
  return (
    <>
      <ul className={css['friend-list']}>
        {friendList.map(friend => {
          return (
            <FriendItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </>
  );
};
