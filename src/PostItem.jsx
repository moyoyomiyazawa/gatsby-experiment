import * as styles from "./PostItem.module.css";

const PostItem = (props) => {
  const { title, date, url } = props.post;
  return (
    <div div className={styles.container} >
      <a href={url}>
        <span className={styles.date}>{date}</span>
        <span className={styles.title}>{title}</span>
      </a>
    </div >
  );
};

export default PostItem;
