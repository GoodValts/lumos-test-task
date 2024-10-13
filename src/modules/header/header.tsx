import styles from "./styles.module.scss";
import headerIcon from "../../assets/icons/header-icon.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#about">
        <img src={headerIcon.src} alt={"header-icon"}></img>
        <p className={styles.logo__text}>VPN</p>
      </a>
      <a href="#vpn">
        <button className={styles.headerButton}>Get VPN</button>
      </a>
    </header>
  );
}
