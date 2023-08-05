interface IUserStore {
  user: IUser;
  loading: boolean;
  error: boolean;
  loginUser: () => Promise<void>;
  registerUser: () => Promise<void>;
}

interface IUser {
  name: string;
  email: string;
  goingToRead: GoingToRead[];
  currentlyReading: GoingToRead[];
  finishedReading: GoingToRead[];
}

interface IGoingToRead {
  title: string;
  author: string;
  publishYear: number;
  totalPages: number;
  pagesFinished: number;
  _id: string;
  __v: number;
}

interface IBook {
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
  pagesFinished: number;
  _id: string;
  __v: number;
}

type registerFunc = (data: Inputs) => Promise<void>;
