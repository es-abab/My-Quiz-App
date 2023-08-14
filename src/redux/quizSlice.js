// quizSlice.js

import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {},
  reducers: {
    updateQuizData: (state, action) => {
      const { courseId, quizData } = action.payload;
      state[courseId] = quizData;
    },
  },
});

export const { updateQuizData } = quizSlice.actions;

export default quizSlice.reducer;
