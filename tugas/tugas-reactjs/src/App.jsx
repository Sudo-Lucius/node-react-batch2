import { useState } from 'react'
import sanbercode from '/logo.png'
import './App.css'
import Button from './button';


function courseName() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Belajar GIT & CLI', checked: false },
    { id: 2, name: 'Belajar HTML & CSS', checked: false },
    { id: 3, name: 'Belajar Javascript', checked: false },
    { id: 4, name: 'Belajar ReactJS Dasar', checked: false },
    { id: 5, name: 'Belajar ReactJS Advance', checked: false },

  ]);

  const handleCourseChange = (id) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === id ? { ...course, checked: !course.checked } : course
      )
    );

  };

  return (
    <><div>
          <img src={sanbercode} className="logo" alt="Sanber logo" />
     </div>
    <div class="checkbox">
      <h1>THINGS TO DO</h1>
      <h2>During bootcamp in sanbercode</h2>
      {courses.map(course => (
        <div key={course.id}>
          <label>
            <input
              type="checkbox"
              checked={course.checked}
              onChange={() => handleCourseChange(course.id)}
            />
            {course.name}
          </label>
        </div>
      ))}
    </div>
    <Button>SEND</Button>
</>
);

}
export default courseName;
 

