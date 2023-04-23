import { createStore, combineReducers } from 'redux';
import homeReducer from './slice/homeSlice';
// import pythonLoopsReducer from '../components/PythonLoops/pythonLoopsSlice';
// import assignmentReducer from '../components/Assignment/assignmentSlice';
// import quizReducer from '../components/Quiz/quizSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  // pythonLoops: pythonLoopsReducer,
  // assignment: assignmentReducer,
  // quiz: quizReducer,
});

const store = createStore(rootReducer);

export default store;
