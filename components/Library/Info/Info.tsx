import React from "react";
import Image from "next/image";
import styles from "./Info.module.scss";

export const Info: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.info__list}>
        <li className={styles.info__item}>
          <h3 className={styles.info__head}>Step 1.</h3>
          <div className={styles.info__wrapper}>
            <Image
              className={styles.img}
              src="/library-icon.svg"
              alt="library-icon"
              width={22}
              height={17}
              priority
            />
            <h4 className={styles.info__subhead}>Create your own library</h4>
          </div>
          <div className={styles.info__wrapperDescription}>
            <Image
              className={styles.img}
              src="/vector.svg"
              alt="Arrow-icon"
              width={10}
              height={12}
              priority
            />
            <p className={styles.info__description}>
              Add there books which you are going to read.
            </p>
          </div>
        </li>
        <li className={styles.info__item}>
          <h3 className={styles.info__head}>Step 2.</h3>
          <div className={styles.info__wrapper}>
            <Image
              className={styles.img}
              src="/flag.svg"
              alt="flag-icon"
              width={15}
              height={17}
              priority
            />
            <h4 className={styles.info__subhead}>Create your first training</h4>
          </div>
          <div className={styles.info__wrapperDescription}>
            <Image
              className={styles.img}
              src="/vector.svg"
              alt="Arrow-icon"
              width={10}
              height={12}
              priority
            />
            <p className={styles.info__description}>
              Set a goal, choose period, start training.
            </p>
          </div>
        </li>
      </ul>
      <button type="button" className={styles.info__btn}>
        Ok
      </button>
    </div>
  );
};
