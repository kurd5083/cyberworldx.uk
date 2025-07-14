import { create } from 'zustand';

export const usePopupStore = create((set, get) => ({
    popup: null,

    openPopup: (popupData) => {
        document.body.style.overflowY = 'hidden';
        set({ popup: popupData }); // true или объект с данными
    },

    closePopup: () => {
        document.body.style.overflowY = 'scroll';
        set({ popup: null });
    },

    isPopupOpen: () => !!get().popup,
}));