import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg"
        alt=""
      />
      post1
      <div>
        {" "}
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
