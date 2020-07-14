import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ courses }) => {
  console.log(courses)
  return (
    <div>
      {courses.map((course, index) =>
        
        <div key={index}>
          <Header course={course.name} />
          <Content parts={course.parts} />
        </div>
      )}
    </div>
  )
}

export default Course