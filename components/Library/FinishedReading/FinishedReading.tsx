import React from "react";
import styles from "./FinishedReading.module.scss";

interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
  rating?: number;
}

interface FinishedReadingProps {
  alreadyBook: Book[];
}

export const FinishedReading: React.FC<FinishedReadingProps> = ({
  alreadyBook,
}) => {
  return (
    <>
      <table className={styles.table}>
        <caption className={styles.table__caption}>Already read </caption>
        <thead>
          <tr className={styles.table__headerRow}>
            <th className={styles.table__header} scope="col">
              Book title
            </th>
            <th className={styles.table__header} scope="col">
              Author
            </th>
            <th className={styles.table__header} scope="col">
              Years
            </th>
            <th className={styles.table__header} scope="col">
              Pages
            </th>
            <th className={styles.table__header} scope="col">
              Rating
            </th>
            <th className={styles.table__header} scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {alreadyBook.map((book) => (
            <tr className={styles.table__bodyRow} key={book._id}>
              <td className={styles.table__data}>{book.title}</td>
              <td className={styles.table__data} data-label="Author">
                {book.author}{" "}
              </td>
              <td className={styles.table__data} data-label="Years">
                {book.publishYear}
              </td>
              <td className={styles.table__data} data-label="Pages">
                {book.pagesTotal}
              </td>
              <td className={styles.table__data} data-label="Rating">
                {book.rating}
              </td>
              <td className={styles.centered}>
                <button className={styles.table__button} type="button">
                  Resume
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
