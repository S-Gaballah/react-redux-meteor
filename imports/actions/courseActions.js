import { Meteor } from 'meteor/meteor';
import * as types from './actionTypes';
import { Courses } from '../api/courses.js';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course }
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course }
}
export function deleteCourseSuccess(course) {
  return { type: types.DELETE_COURSE_SUCCESS, course }
}

export function loadCourses() {
  return function (dispatch) {
    Meteor.call('allCourses', (error, courses) => {
      
      (!error && courses.length > 0) ? dispatch(loadCoursesSuccess(courses)) : console.log(error);
    });
  };
};

export function deleteCourse(course) {
  return function (dispatch) {
    if (course._id) {
      Meteor.call('deleteCourse', course._id, (error, count) => {
        (!error && count > 0) ? dispatch(deleteCourseSuccess(course)) : console.log(error.reason);
      });
    }
  };
};

export function saveCourse(course) {
  return function (dispatch) {
    if (course._id) {
      Meteor.call('updateCourse', course._id, course, (error, count) => {
        (!error && count > 0) ? dispatch(updateCourseSuccess(course)) : console.log(error.reason);
      });
    } else {
      Meteor.call('addCourse', course, (error, _id) => {
        debugger
        (!error && _id) ? dispatch(createCourseSuccess({ ...course, _id })) : console.log(error.reason);
      });
    }
  };
};
