import React from 'react';
import PropTypes from 'prop-types';

import CourseListRow from './CourseListRow'

const CourseList = ({ courses, deleteCourse }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            Title
          </th>
          <th>
            Category
          </th>
          <th>
            Length
          </th>
        </tr>
      </thead>
      <tbody>
        {
          courses.map(course => <CourseListRow key={course._id} course={course} onDelete={deleteCourse}/>
          )}
      </tbody>
    </table>
  );
};

CourseList.prototype = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseList;
