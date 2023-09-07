import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload);
    },

    deleteCourse: (state, action) => {
      const courseIdToDelete = action.payload;
      return state.filter(course => course.courseId !== courseIdToDelete);
    },

    updateCourseStatus: (state, action) => {
      const { courseId } = action.payload;
      const courseToUpdate = state.find((course) => course.courseId === courseId);
      if (courseToUpdate) {
        courseToUpdate.completeStatus = true;
      }
    },

    updateCourseScore: (state, action) => {
      const { courseId, score, percentage } = action.payload;
      console.log(percentage)
      const courseScoreToUpdate = state.find((course) => course.courseId === courseId);
      if (courseScoreToUpdate) {
        courseScoreToUpdate.score = score;
        courseScoreToUpdate.scorePercentage = percentage;
      }
    },
  },
});

export const { addCourse, deleteCourse, updateCourseStatus, updateCourseScore } = courseSlice.actions;

export default courseSlice.reducer;
