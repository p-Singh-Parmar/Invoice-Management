import logo from "./logo.svg";
import group from "./group.svg";
import styles from "./style.module.css";

function Header() {
  return (
    <>
      <div className={styles.logos}>
        <div className={styles.second}>
          <img src={group} alt="the first logo" />
        </div>
        <div className={styles.first}>
          <img src={logo} alt="the second logo" />
        </div>
      </div>
      <div className={styles.text}>
        <h4>Invoice list</h4>
      </div>
    </>
  );
}
export default Header;
