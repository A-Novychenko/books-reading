import React from "react";

import styles from "./CurrentlyReading.module.scss";

interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
}

interface CurrentlyReadingProps {
  readingBook: Book[];
}

export const CurrentlyReading: React.FC<CurrentlyReadingProps> = ({
  readingBook,
}) => {
  return (
    <>
      <table className={styles.table}>
        <caption className={styles.table__caption}>Reading now</caption>
        <thead>
          <tr className={styles.table__headerRow}>
            <th className={styles.table__header}>Book title</th>
            <th className={styles.table__header}>Author</th>
            <th className={styles.table__header}>Years</th>
            <th className={styles.table__header}>Pages</th>
          </tr>
        </thead>
        <tbody>
          {readingBook.map((book) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
