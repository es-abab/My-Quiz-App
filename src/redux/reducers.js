import { combineReducers } from 'redux';
import coursesReducer from './courseSlice';
import quizReducer from './quizSlice';

const rootReducer = combineReducers({
  courses: coursesReducer,
  quiz: quizReducer,
  // Add more reducers here if needed
});

export default rootReducer;
