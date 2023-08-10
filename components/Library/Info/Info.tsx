import styles from "./Info.module.scss";
import flag from "../../../public/library-icon.svg";

export const Info = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.info__list}>
        <li className={styles.info__item}>
          <h3 className={styles.info__head}>Step 1.</h3>

          <svg
            className={styles.info__icon}
            aria-label=""
            width={22}
            height={17}>
            <use xlinkHref={flag}></use>
          </svg>
          <h4 className={styles.info__subhead}>Create your own library</h4>
          <p className={styles.info__description}>
            Add there books which you are going to read.
          </p>
        </li>
        <li className={styles.info__item}>
          <h3 className={styles.info__head}>Step 2.</h3>
          <h4 className={styles.info__subhead}>Create your first training</h4>
          <p className={styles.info__description}>
            Set a goal, choose period, start training.
          </p>
        </li>
      </ul>
      <button type="button" className={styles.info__btn}>
        Ok
      </button>
    </div>
  );
};
