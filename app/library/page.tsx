import Link from "next/link";
import { FC } from "react";

// Start
import { Info } from "@/components/Library/Info/Info";
import { Library } from "@/components/Library/Library";

// End

const LibraryPage: FC = () => {
  return (
    <div>
      <h1 className="visually-hidden">Library</h1>
      {/* <Info /> */}
      <Library />
    </div>
  );
};

export default LibraryPage;
