import {registerUser} from "@/actions/registerUser";
import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

export const useUser = create<IUserStore>()(
  devtools(
    persist(
      (set) => ({
        user: {
          name: "",
          email: "",
          goingToRead: [],
          currentlyReading: [],
          finishedReading: [],
        },
        loading: false,
        error: false,
        getUser: async () => {
          set({loading: true});
          try {
            const resp = await fetch(
              "https://bookread-backend.goit.global/user/books"
            );
            const user: IUser = await resp.json();
            set({user});
          } catch (error) {
          } finally {
            set({loading: false});
          }
        },
        loginUser: async () => {
          set({loading: true});
        },

        registerUser: async () => {
          set({loading: true});
          //   const user = await registerUser()
        },
      }),
      {
        name: "books-storage",
      }
    )
  )
);
