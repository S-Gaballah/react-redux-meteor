import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const CourseListRow = ({course,onDelete}) =>{
    return (
        <tr>
            <td>
                <Link to={'/course/' + course._id}>{course.title}</Link>
            </td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td>
                <button className='btn btn-warning' onClick={onDelete} value={course._id}>Delete</button>
            </td>
        </tr>
    )
}

CourseListRow.prototype = {
    course : PropTypes.object.isRequired,
    onDelete : PropTypes.func.isRequired
}

export default CourseListRow;