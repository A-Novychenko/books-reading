interface IUserStore {
  loading: boolean;
  error: boolean;
  isLogin: boolean;
  accessToken: string;
  refreshToken: string;
  sid: string;
  userData: IUser;
  loginUserSaveStore: (userData: IUserData) => Promise<void>;
  logoutUserSaveStore: () => Promise<void>;
}

interface IUserData {
  accessToken: string;
  refreshToken: string;
  sid: string;
  userData: IUser;
}

interface IUser {
  name: string;
  email: string;
  goingToRead: any[];
  currentlyReading: any[];
  finishedReading: any[];
  id: string;
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
  id: Key | null | undefined;
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
  pagesFinished: number;
  _id: string;
  __v: number;
}

interface LoginUser {
  accessToken: string;
  refreshToken: string;
  sid: string;
  userData: UserData;
}

type registerFunc = (data: Inputs) => Promise<void>;

type loginFunc = (data: Inputs) => Promise<LoginUser>;

type Inputs = {
  email: string;
  password: string;
};
