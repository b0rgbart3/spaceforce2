import { createSlice } from '@reduxjs/toolkit';

export const resultsSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1
    }
    
  },
});

export const { increment } = resultsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const resultsAsync = query => dispatch => {

//     console.log("in the slicer.");

//     fetch(query)
//     .then(response => response.json())
//     .then(data => dispatch(receivedResults, data)
//         );

//   setTimeout(() => {
//     dispatch(receivedResults, payload);
//   }, 1000);
//};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//export const selectCount = state => state.counter.value;
export const selectCount = state => state.counter.value;

//export default counterSlice.reducer;
export default resultsSlice.reducer;
