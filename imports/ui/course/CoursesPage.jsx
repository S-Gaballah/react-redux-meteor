import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import browserHistory from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList'
import { Courses } from '../../api/courses.js';

class CoursesPage extends React.Component {

  // in the constructor, we are going to initialize state and
  // also call our bind functions used in our component
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse(event) {
    let course = this.props.courses.filter(c => c._id == event.target.attributes["value"].value);
    this.props.actions.deleteCourse(course[0]);
  }

  redirectToAddCoursePage(event) {
    this.context.router.push("/course");
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <input className="btn btn-primary" type="button" value="Add Course" onClick={this.redirectToAddCoursePage} />
        <CourseList courses={this.props.courses} deleteCourse={this.deleteCourse} />
      </div>
    );
  }
}

// provide propTypes validation for TypeChecking
// React.PropTypes is deprecated so we have to use prop-types library
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

CoursesPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  // state => the current state of the component
  // ownProps => this parameter let you access props that are being attached to this component
  return {
    courses: state.courses // come from root reducer // instead of using courseReducer
  };
}

function mapDispatchToProps(dispatch) {
  // mapDispatchToProps define what actions are available for our component
  // dispatch => used to fire functions
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
