import * as styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.siteName}>
        <a href="/">My Site</a>
      </h1>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a href="/">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Works</a>
        </li>
      </ul>
      <div className={styles.social}>
        <a href="https://github.com/moyoyomiyazawa" target="_blank" rel="noreferrer">
          <img width={32} height={32} src="/GitHub.png" alt="GitHub" />
        </a>
      </div>
    </header>
  );
};

export default Header;
