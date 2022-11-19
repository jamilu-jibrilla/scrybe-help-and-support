import styles from './HelpSupportNav.module.scss'
const HelpSupportNav = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav}>
        <a href="#">Help and Support</a>
        <img src="/icon.svg" alt="" />
        <a href="#">General</a>
      </div>
      <div className={styles.input}>
        <div>
          <img src="/search.svg" alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default HelpSupportNav;