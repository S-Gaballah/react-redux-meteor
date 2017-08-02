import React from "react";
import {Route, IndexRoute} from "react-router";



import App from "../imports/ui/App";
import CoursesPage from "../imports/ui/course/CoursesPage";
import ManageCoursePage from "../imports/ui/course/ManageCoursePage";
import HomePage from "../imports/ui/course/home";


export default(
    <Route path="/"  component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="courses" component={CoursesPage}></Route>
        <Route path="course" component={ManageCoursePage}></Route>
        <Route path="course/:id" component={ManageCoursePage}></Route>
    </Route>
)