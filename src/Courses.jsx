import React from 'react'
import Course from './Course';


const Courses = ({courses,removeCourse}) => {
    //console.log(courses);
  return (
    <div className='courseMainDiv'>
      <div>
      <h2>Courses</h2>
      </div>
     <div className='cardDiv'>
      {
        courses.map((course)=>(
          <Course key={course.id} {...course} removeOneCourse={removeCourse} />
        ))
      }
     </div>
    </div>
  )
}

export default Courses