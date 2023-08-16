import Link from "next/link";
import {FC} from "react";

// Start
import {Info} from "@/components/Library/Info/Info";

import {Library} from "@/components/Library/Library";

// import { Books } from "@/components/Library/BooksLibrary/BooksLibrary";
import {AddBookForm} from "@/components/Library/BooksForm/Form";
import {BookList} from "@/components/Library/BooksList/BooksList";

// End

const LibraryPage: FC = () => {
  return (
    <section>
      <h1 className="visually-hidden">Library</h1>

      <div>
        {/* <Info /> */}
        <Library />
      </div>

      <AddBookForm />
      <Info />
      <BookList />
    </section>
  );
};

export default LibraryPage;
