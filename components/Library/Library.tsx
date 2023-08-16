import { CurrentlyReading } from "./CurrentlyReading/CurrentlyReading";
import { FinishedReading } from "./FinishedReading/FinishedReading";
import { GoingToRead } from "./GoingToRead/GoingToRead";
import books from "./books.json";

export const Library = () => {
  return (
    <>
      <FinishedReading alreadyBook={books.finishedReading} />
      <CurrentlyReading readingBook={books.currentlyReading} />
      <GoingToRead bookToRead={books.goingToRead} />
    </>
  );
};
