import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import {useState} from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
    title: string;
    description: string;
    id: string
};


//key can always be set even if not declared in props type
export default function App() {
  const [courseGoals , setCourseGoals] = useState<CourseGoal[]>([
  ]);
  
  let idCounter = 0;
  
  function AddGoalHandler(goal: string, description: string) {
    console.log("Add Goal Handler");
    setCourseGoals((prevCourseGoals) => {
      const updatedGoals  = [...prevCourseGoals];
      updatedGoals.unshift({title: goal, description, id: crypto.randomUUID()});
      idCounter++;
      return updatedGoals;
    });
  }
  
  function DeleteGoalHandler(id: string){
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  
  return <main>    
    <Header image={{src: goalsImg, alt: "A list of goals"}}>Your Course Goals</Header>
    <NewGoal onAddGoal = {AddGoalHandler}/>
    <CourseGoalList courseGoals={courseGoals} DeleteGoalHandler={DeleteGoalHandler}/>  
  </main>
}
