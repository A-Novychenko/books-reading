import styles from "./BooksLibrary.module.scss";
import goingToRead from "../books.json";

export const Books = () => {
  return (
    <>
      <ul className={styles.goingToRead}>
        {goingToRead &&
          goingToRead.map((books) => (
            <li key={books._id} className={styles.goingToRead__item}>
              <span className={styles.goingToRead__name}>{books.title}</span>
              <span className={styles.goingToRead__wrapper}>
                <span className={styles.goingToRead__title}>Author:</span>
                <span className={styles.goingToRead__value}>
                  {books.author}
                </span>
              </span>
              <span className={styles.goingToRead__wrapper}>
                <span className={styles.goingToRead__title}>Year:</span>
                <span className={styles.goingToRead__value}>
                  {books.publishYear}
                </span>
              </span>
              <span className={styles.goingToRead__wrapper}>
                <span className={styles.goingToRead__title}>Pages:</span>
                <span className={styles.goingToRead__value}>
                  {books.pagesTotal}
                </span>
              </span>
            </li>
          ))}
      </ul>
    </>
  );
};
