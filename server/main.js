import { Meteor } from 'meteor/meteor';
import { Courses } from '../imports/api/courses';

Meteor.startup(() => {
    Meteor.publish("getCourses", () => Courses.find());

    Meteor.methods({
        allCourses() {
            return Courses.find().fetch();
        },
        addCourse(course) {
            if (course) return Courses.insert(course)
        },
        updateCourse(_id, course) {
            if (_id && course)
                return Courses.update(_id,
                    { $set: { title: course.title, category: course.category, length: course.length } },
                    {}
                );
        },
        deleteCourse(_id) {
            if (_id)
                return Courses.remove(_id)
        }
    });
    // Courses.allow({
    //     'insert': () => {
    //         return false;
    //     },
    //     'remove': () => {
    //         return true;
    //     },
    //     'update': () => {
    //         return true;
    //     }
    // });
});
