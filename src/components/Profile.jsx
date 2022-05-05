import s from './Profile.module.css';


const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://docs.microsoft.com/ru-ru/windows/apps/design/controls/images/image-licorice.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New posts</div>
        <div className={s.posts}>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
