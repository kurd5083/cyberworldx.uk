// store/searchStore.js
import { create } from 'zustand';
import { products } from '../data/products';

export const useSearchStore = create((set, get) => ({
  query: '',
  results: [],
  isOpen: false,

  setQuery: (query) => {
    if (query.trim() === '') {
      set({ query, results: [], isOpen: false });
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    set({
      query,
      results: filtered,
      isOpen: filtered.length > 0,
    });
  },

  clearSearch: () => {
    set({ query: '', results: [], isOpen: false });
  },
}));
