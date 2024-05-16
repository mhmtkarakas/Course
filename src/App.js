import { useEffect,useState } from 'react'
import  axios  from 'axios'
import Courses from './Courses';
import Loading from './Loading';


function App() {
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true)

  const deleteCourse = (id) =>{
    const deletedCourse = courses.filter(course => course.id !== id);
    setCourses(deletedCourse);
    console.log(id);
}
  const fetchCourses = async () =>{
    setLoading(true);
    try{
      const result = await axios.get("http://localhost:3004/courses");
      //console.log(result);
      setCourses(result.data);
      setLoading(false);
    }
    catch(error){
      setLoading(false);
    }
   
  }
  useEffect(()=>{
    fetchCourses();
  },[])
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ):(
        <Courses courses={courses} removeCourse={deleteCourse} />
      )}
    
    </div>
  );
}

export default App;
