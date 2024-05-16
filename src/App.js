import { useEffect,useState } from 'react'
import "./App.css"
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
      <>
      {
        courses.length === 0 ? (
          <div className='refreshDiv'>
            <h2>Butun Kurslari Sildin!</h2>
            <button className="refreshBtn" onClick={()=>fetchCourses()}>Yenile</button>
          </div>
        ) : (
          <Courses courses={courses} removeCourse={deleteCourse} />
        )
      }
      </>
       
      )}
    
    </div>
  );
}

export default App;
