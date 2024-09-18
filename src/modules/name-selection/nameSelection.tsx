import { useState } from "react";
import styles from "./styles.module.scss";
import radiobuttonIcon from "../../assets/icons/radiobutton-icon.png";

const names = ["Name1 Surname1", "Name2 Surname2", "Name3 Surname3"];

export default function NameSelection() {
  const [selected, setSelected] = useState("Name1 Surname1");

  return (
    <section className={styles.section} id="vpn">
      <p className={styles.title}>
        Choose <span className={styles.title_blue}>your name</span>
      </p>
      {names.map((el) => (
        <div className={styles.nameBlock} key={el}>
          <div
            className={
              el === selected
                ? `${styles.radioButton} ${styles.radioButton_selected}`
                : styles.radioButton
            }
          >
            {el === selected && <img src={radiobuttonIcon.src} alt="" />}
          </div>
          <div className={styles.name}>{el}</div>
        </div>
      ))}
      <button className={styles.button}>Get VPN</button>
    </section>
  );
}
