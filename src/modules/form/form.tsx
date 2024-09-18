import styles from "./styles.module.scss";
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
      <p className={styles.name}>{name}</p>
      <input
        className={styles.input}
        placeholder="Enter your email"
        type="email"
        onChange={(e) => {
          const value = e.target.value;
          if (
            value.includes("@") &&
            value.split("@")[1].includes(".") &&
            value.split("@")[1].split(".")[1].length
          ) {
            console.log("email value:", value);
            setMail(value);
          } else {
            console.log("email value (incorrect):", value);
            setMail("");
          }
        }}
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
        className={
          mail.length
            ? styles.button
            : `${styles.button} ${styles.button_disabled}`
        }
        onClick={() =>
          mail
            ? console.log("mail:", mail)
            : console.log("disabled button click, incorrect mail")
        }
      >
        Continue
      </button>
    </section>
  );
}
