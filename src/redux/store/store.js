import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../slices/themeSlice';

import { loadState, saveState } from '../persistedStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    theme: themeSlice,
    preloadedState: persistedState,
  },
});

store.subscribe(() => {
  saveState({
    theme: store.getState().theme,
  });
});
export { store };
