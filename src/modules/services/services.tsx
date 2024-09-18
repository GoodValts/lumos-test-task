import styles from "./styles.module.scss";
import locationIcon from "../../assets/icons/services-location.png";
import contentIcon from "../../assets/icons/services-content.png";
import speedIcon from "../../assets/icons/services-speed.png";
import sitesIcon from "../../assets/icons/services-sites.png";
import { StaticImageData } from "next/image";

const servicesData: {
  title: string;
  description: string;
  logo: StaticImageData;
}[] = [
  {
    title: "Unlimited access to content",
    description:
      "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
    logo: contentIcon,
  },
  {
    title: "Flashing connecting speed",
    description:
      "VPN Lumos offers unlimited bandwidth for faster loading and no buffering!",
    logo: speedIcon,
  },
  {
    title: "Hide your location",
    description:
      "Get your own unique IP for added security and access to restricted sites, apps, and services!",
    logo: locationIcon,
  },
  {
    title: "Bypass blocked sites",
    description: "Access any website safely and anonymously!",
    logo: sitesIcon,
  },
];

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.serviceContainer}>
        {servicesData.map((el) => (
          <div className={styles.serviceBlock} key={el.title}>
            <img
              className={styles.logo}
              src={el.logo.src}
              alt={el.title.split(" ").pop()}
            ></img>
            <h3 className={styles.title}>
              <span className={styles.title_orange}>
                {el.title.split(" ")[0]}
              </span>
              <br />
              {el.title.split(" ").slice(1).join(" ")}
            </h3>
            <p className={styles.description}>{el.description}</p>
          </div>
        ))}
      </div>
      <p className={styles.paragraph}>Millions of people trust us!</p>
    </section>
  );
}
