// import {registerUser} from "@/actions/registerUser";

// import {devtools, persist} from "zustand/middleware";
// import {shallow} from "zustand/shallow";
// import {createWithEqualityFn} from "zustand/traditional";

// export const useUser = createWithEqualityFn<IUserStore>()(
//   devtools(
//     persist(
//       (set) => ({
//         userData: {
//           name: "",
//           email: "",
//           goingToRead: [],
//           currentlyReading: [],
//           finishedReading: [],
//           id: "",
//         },
//         loading: false,
//         error: false,
//         isLogin: false,
//         accessToken: "",
//         refreshToken: "",
//         sid: "",

//         loginUserSaveStore: async (res) => {
//           set({userData: res.userData});
//           set({loading: false});
//           set({isLogin: true});
//         },

//         logoutUserSaveStore: async () => {
//           set({
//             userData: {
//               name: "",
//               email: "",
//               goingToRead: [],
//               currentlyReading: [],
//               finishedReading: [],
//               id: "",
//             },
//             loading: false,
//             error: false,
//             isLogin: false,
//             accessToken: "",
//             refreshToken: "",
//             sid: "",
//           });
//         },
//       }),
//       {
//         name: "books-storage",
//       }
//     )
//   ),
//   shallow
// );
