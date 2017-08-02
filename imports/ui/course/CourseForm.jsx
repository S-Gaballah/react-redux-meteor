import React from 'react';
import PropTypes from 'prop-types';

const CourseForm = ({ course, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Add Course</h1>
      <input type="text" name='title' label='Title' value={course.title} onChange={onChange} />

      <input type="text" name='category' label='Category' value={course.category} onChange={onChange} />

      <input type="text" name='length' label='Length' value={course.length} onChange={onChange} />


      <input
        type='submit'
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className='btn btn-primary'
        onClick={onSave} />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
