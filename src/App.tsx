import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";


//key can always be set even if declared in props type
export default function App() {
  return <main>    
    <Header image={{src: goalsImg, alt: "A list of goals"}}>Your Course Goals</Header>
    <CourseGoal title="React" description="React is a JavaScript library for building user interfaces." key={1}>Child</CourseGoal>
  </main>
}
