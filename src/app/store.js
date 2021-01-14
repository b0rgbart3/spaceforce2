import { configureStore } from '@reduxjs/toolkit';
import resultsReducer from '../resultsSlice';
import queryReducer from '../querySlice';

export default configureStore({
  reducer: {
    query: queryReducer,
    results: resultsReducer,
  },
});
