import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import radiobuttonIcon from "../../assets/icons/radiobutton-icon.png";

export default function NameSelection({
  setIsForm,
  setName,
}: {
  setIsForm: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
}) {
  const [selected, setSelected] = useState("");
  const [names, setNames] = useState<string[]>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await fetch("https://randomuser.me/api/?results=10")
          .then((res) => res.json())
          .then((res) => res.results)
          .then((res) => {
            const arr = res.map(
              (el: { name: { first: string; last: string } }) =>
                el.name.first.concat(` ${el.name.last}`)
            );
            setNames(arr);
          });
      } catch {
        console.error("fetch err");
      }
    };

    fetchUser();
  }, []);

  return (
    <section className={styles.section}>
      {names && (
        <p className={styles.title}>
          Choose <span className={styles.title_blue}>your name</span>
        </p>
      )}
      {names &&
        names.map((el) => (
          <div
            className={styles.nameBlock}
            key={el}
            onClick={() => {
              setSelected(el);
            }}
          >
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
      <button
        className={styles.button}
        onClick={() => {
          if (selected) {
            setName(selected);
            setIsForm(true);
          }
        }}
      >
        Get VPN
      </button>
    </section>
  );
}
