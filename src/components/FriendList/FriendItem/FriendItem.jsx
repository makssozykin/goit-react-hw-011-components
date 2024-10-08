import css from './FriendItem.module.css';
export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className={css.item}>
        <span className={`${css.status} ${isOnline ? css.Online : ''}`}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};
