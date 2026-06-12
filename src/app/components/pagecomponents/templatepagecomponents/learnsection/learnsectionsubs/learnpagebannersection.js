import Image from "next/image";
import styles from "./styles/learnpagebannersection.module.css";

export default function LearnPageBannerSection({ banner }) {
  return (
    <section className={styles.bannerContainer}>
      <a
        href={banner?.link || "#"}
        className={styles.bannerLink}
        aria-label={banner?.alt || "Banner advertisement"}
      >
        <Image
          src={banner?.image || "/images/learnbanner.jpeg"}
          alt={banner?.alt || "Banner advertisement"}
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
      </a>
    </section>
  );
}
