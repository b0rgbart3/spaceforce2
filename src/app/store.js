import { configureStore } from '@reduxjs/toolkit';
import resultsReducer from '../resultsSlice';

export default configureStore({
  reducer: {
    results: resultsReducer,
  },
});
