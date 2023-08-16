"use client";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {BookItem} from "./BookItem";

export const BookList = () => {
  const {data: session} = useSession();
  const [books, setBooks] = useState<IBook[]>([]);

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
            setBooks(data.goingToRead);
          } else {
            console.error("Failed to fetch books");
          }
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      }
    };

    fetchBooks();
  }, [session]);

  if (!session) {
    return <p>Будь ласка, увійдіть</p>;
  }

  return (
    <div>
      <h1>Список книг</h1>

      {books.map((books) => (
        <BookItem key={books._id} book={books} />
      ))}
    </div>
  );
};
