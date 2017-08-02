import * as types from '../actions/actionTypes';
import initialState from './initialState';


// state is immutable so you shouldn't be mutating it.
// use ES6 spread operator to return new object.
// spread operator explode the array to individual values

export default function CourseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.UPDATE_COURSE_SUCCESS:
      return [...state.filter(course => course._id !== action.course._id),
      Object.assign({}, action.course)];
    case types.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];
    case types.DELETE_COURSE_SUCCESS:
      return [...state.filter(course => course._id !== action.course._id)];
    default:
      return state;
  }
};
