export interface Book {
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
  pagesFinished: number;
  _id: string;
  __v: number;
}

export interface User {
  name: string;
  email: string;
  goingToRead: GoingToRead[];
  currentlyReading: GoingToRead[];
  finishedReading: GoingToRead[];
}

export interface GoingToRead {
  title: string;
  author: string;
  publishYear: number;
  totalPages: number;
  pagesFinished: number;
  _id: string;
  __v: number;
}
