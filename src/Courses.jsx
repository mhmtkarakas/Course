import React, { useState } from "react";
import Course from "./Course";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Courses = ({ courses, removeCourse }) => {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const prevCourse = ( ) => {
      setIndex((index)=>{
        let newIndex = index-1;
        return checkIndex(newIndex);
      })
  }
  const nextCourse = ( ) => {
    setIndex((index)=>{
      let newIndex = index+1;
      return checkIndex(newIndex)
    })
}
const randomCourse = () =>{
  let setRandomCourse = Math.floor(Math.random()*courses.length);
  if(setRandomCourse === index){
   setRandomCourse = index + 1;
  }
  setIndex(checkIndex(setRandomCourse));
}
  const checkIndex = (index) => {
    if(index<0){
      return courses.length - 1;
    }
    if(index>courses.length-1){
        return 0;
    }
      return index;
  }

  return (
    <div className="courseMainDiv">
      <div className="headDiv">
       
        <h2>Courses</h2>
        <button className="randomCourseBtn" onClick={randomCourse}>Rastgele Kurs Ata</button>
      </div>
      <div className="cardDiv">
        <button className="prevNextBtn" onClick = {prevCourse}>
          <HiChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price} TL</h4>
          </div>
          <p>{content}</p>
          {/* <button className="cardDeleteBtn" onClick={() => removeOneCourse(id)}>
            Sil
          </button> */}
        </div>
        <button className="prevNextBtn"  onClick = {nextCourse}>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Courses;
