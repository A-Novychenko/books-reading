"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import React from "react";

import { CurrentlyReading } from "./CurrentlyReading/CurrentlyReading";
import { FinishedReading } from "./FinishedReading/FinishedReading";
import { GoingToRead } from "./GoingToRead/GoingToRead";
import { Info } from "./Info/Info";
import { Loader } from "../Loader/Loader";
import { AddBookForm } from "./BooksForm/Form";

interface Books {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
  pagesFinished: number;
  __v: number;
  feedback?: string;
  rating?: number;
}

interface FinishedReadingProps {
  alreadyBook: Partial<Books>[];
}

export const Library: React.FC = () => {
  const { data: session } = useSession();
  const [userBooks, setUserBooks] = useState<{
    goingToRead: Books[];
    currentlyReading: Books[];
    finishedReading: Books[];
  }>({
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  const [dataUpdated, setDataUpdated] = useState<boolean>(false);

  const handleBookUpdate = (bookUpdated: boolean) => {
    setDataUpdated(bookUpdated);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      if (session) {
        try {
          const response = await fetch(
            "https://bookread-backend.goit.global/user/books",
            {
              method: "GET",
              headers: {
                Authorization: ` ${session.user.accessToken}`,
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            setUserBooks(data);
          } else {
            console.error("Failed to fetch books");
          }
        } catch (error) {
          console.error("Error fetching books:", error);
        }
        setIsLoading(false);
      }
    };

    fetchBooks();
    if (dataUpdated) {
      setDataUpdated(false);
    }
  }, [dataUpdated, session]);

  const allBooks =
    userBooks.finishedReading.length +
    userBooks.currentlyReading.length +
    userBooks.goingToRead.length;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && <AddBookForm handleBookUpdate={handleBookUpdate} />}
      {!isLoading && userBooks.finishedReading.length > 0 && (
        <FinishedReading alreadyBook={userBooks.finishedReading} />
      )}
      {!isLoading && userBooks.currentlyReading.length > 0 && (
        <CurrentlyReading readingBook={userBooks.currentlyReading} />
      )}
      {!isLoading && userBooks.goingToRead.length > 0 && (
        <GoingToRead bookToRead={userBooks.goingToRead} />
      )}

      {!isLoading && allBooks === 0 ? <Info /> : <></>}
    </>
  );
};
function handleBookUbdate(bookUpdate: any) {
  throw new Error("Function not implemented.");
}
