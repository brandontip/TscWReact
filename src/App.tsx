import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import {useState} from "react";

type CourseGoal = {
    title: string;
    description: string;
    id: number
};


//key can always be set even if declared in props type
export default function App() {
  const [courseGoals , setCourseGoals] = useState<CourseGoal[]>([
    {title: "cg1", description: "Finish the Course", id: 1},
    {title: "cg2", description: "Learn all about the Course Main Topic", id: 2},
    {title: "cg3", description: "Help other students in the Course Q&A", id: 3},
  ]);
  
  function AddGoalHandler() {
    console.log("Add Goal Handler");
    setCourseGoals((prevCourseGoals) => {
      const updatedGoals  = [...prevCourseGoals];
      updatedGoals.unshift({title: "cg4", description: "New Goal", id: 4});
      return updatedGoals;
    });
  }
  
  return <main>    
    <Header image={{src: goalsImg, alt: "A list of goals"}}>Your Course Goals</Header>
    <button onClick={AddGoalHandler}>Add Goal {courseGoals.length}</button>
    {courseGoals.map((goal) => <CourseGoal key={goal.id} title={goal.title} description={goal.description}>A</CourseGoal>)}
  </main>
}
