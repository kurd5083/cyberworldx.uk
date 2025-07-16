import { create } from 'zustand';

export const useMenuStore = create((set, get) => ({
    menu: null,

    openMenu: () => {
        document.body.style.overflowY = 'hidden';
        set({ menu: true });
    },

    closeMenu: () => {
        document.body.style.overflowY = 'scroll';
        set({ menu: false });
    },

    isMenuOpen: () => !!get().menu,
}));