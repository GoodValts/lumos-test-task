import styles from "./styles.module.scss";
import headerIcon from "../../assets/icons/header-icon.png";
import { Dispatch, SetStateAction, useState } from "react";
import noticeIcon from "../../assets/icons/notice-icon.png";
import closeIcon from "../../assets/icons/close-icon.png";

export default function Form({
  name,
  setIsForm,
}: {
  name: string;
  setIsForm: Dispatch<SetStateAction<boolean>>;
}) {
  const [mail, setMail] = useState<string>("");

  return (
    <section className={styles.section}>
      <img
        className={styles.return}
        src={closeIcon.src}
        alt="close-form-icon"
        onClick={() => setIsForm(false)}
      />
      <h3 className={styles.title}>Your name</h3>
      {name ? (
        <p className={styles.name}>{name}</p>
      ) : (
        <input className={styles.input} />
      )}
      <input
        className={styles.input}
        placeholder="Enter your email"
        type="email"
      ></input>
      <div className={styles.notice}>
        <img
          src={noticeIcon.src}
          className={styles.noticeImage}
          alt="notice-icon"
        />
        <p className={styles.noticeText}>
          Your information is 100% secure. We don’t share your personal
          information.
        </p>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          mail ? console.log("mail") : console.log("disabled button click");
        }}
      >
        Continue
      </button>
    </section>
  );
}
