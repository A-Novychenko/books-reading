import Link from "next/link";
import {FC} from "react";

// Start
import {Info} from "@/components/Library/Info/Info";
import {Books} from "@/components/Library/BooksLibrary/BooksLibrary";
// End

const LibraryPage: FC = () => {
  return (
    <div>
      <h1 className="visually-hidden">Library</h1>
      <Info />
    </div>
  );
};

export default LibraryPage;
