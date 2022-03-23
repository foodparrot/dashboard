import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import immer from "./immer"
let userStore = (set) => ({
    data: {},
    auth: false,
    loading: true,
    setVerified: ({ email, phone }) => {
        set((state) => {
            if (email) {
                state.data.isEmailVerified = true;
            }
            else {
                state.data.isNumberverified = true;
            }
        });
    },
    login: (user) => {
        // { data: user, auth: true, loading: false }
        set((state) => {
            state.data = user;
            state.auth = true;
            state.loading = false;
        })
    },
    logout: () => {
        set((state) => {
            state.data = {};
            state.auth = false;
        })
    },
})

userStore = devtools(userStore, { name: "user" })
userStore = persist(userStore, { name: 'user' })
userStore = immer(userStore)
export default create(userStore);