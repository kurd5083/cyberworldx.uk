import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,

            login: (email, password) => {
                const storedUser = get().user;
                if (storedUser?.email === email && storedUser?.password === password) {
                    set({ isAuthenticated: true });
                    return true;
                } else {
                    throw new Error("Неверный email или пароль");
                }
            },

            register: (email, password, repeatPassword) => {
                if (password !== repeatPassword) {
                    throw new Error("Пароли не совпадают!");
                }

                set({
                    user: { email, password },
                    isAuthenticated: true
                });
                return true;
            },

            logout: () => {
                set({ isAuthenticated: false });
            },
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);