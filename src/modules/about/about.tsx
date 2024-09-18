import styles from "./styles.module.scss";
import aboutImage from "../../assets/about-image.png";
import aboutIcon from "../../assets/icons/about-icon.png";
import overviewLocationIcon from "../../assets/icons/overview-location.png";
import overviewServerIcon from "../../assets/icons/overview-server.png";
import React from "react";

const overviewData: {
  context: string;
  amount: number;
  img: string;
}[] = [
  {
    context: "Locations",
    amount: 50,
    img: overviewLocationIcon.src,
  },
  {
    context: "Servers",
    amount: 1000,
    img: overviewServerIcon.src,
  },
];

export default function About() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>
        Access{" "}
        <span className={styles.title_blue}>
          everything
          <br />
          securely
        </span>{" "}
        with
        <br />
        VPN
      </h3>
      <img className={styles.image} src={aboutImage.src} alt="about-image" />
      <button className={styles.button}>Get VPN</button>
      <div className={styles.achievements}>
        <img
          className={styles.achievementsImage}
          src={aboutIcon.src}
          alt="achievements-logo"
        />
        <p className={styles.achievementsText}>
          Trusted by <br />
          <span className={styles.achievementsText_bold}>50M+ Users</span>
        </p>
        <img
          className={styles.achievementsImage_left}
          src={aboutIcon.src}
          alt="achievements-logo"
        />
      </div>
      <div className={styles.overview}>
        <div className={styles.overviewContainer}>
          {overviewData.map((el, index) => (
            <React.Fragment key={el.context}>
              <div className={styles.overviewBlock}>
                <img
                  className={styles.overviewImage}
                  src={el.img}
                  alt={`${el.context}-logo`}
                />
                <p className={styles.overviewAmount}>{el.amount.toString()}+</p>
                <p className={styles.overviewContext}>{el.context}</p>
              </div>
              {index !== overviewData.length - 1 && (
                <span className={styles.overviewSeparator}></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <p className={styles.paragraph}>
        VPN-your <span className={styles.paragraph_blue}>ultimate</span>{" "}
        solution for a private and secure online experience!
      </p>
    </section>
  );
}
