import { create } from 'zustand';

export const useAppStore = create((set) => ({
  user: {
    feautered: {},
    trendings: [],
  },

  setFeautured: (movie) => {
    return set({
      feautered: movie,
    });
  },

  setTrendings: (movies) => {
    return set({
      trendings: movies
    });
  },
}));
