import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal} from "../App";

type CourseGoalListProps = {
    courseGoals: CGoal[],
    DeleteGoalHandler: (id: string) => void
}

export default function CourseGoalList({courseGoals, DeleteGoalHandler}: CourseGoalListProps) {
    return <ul>    
        {courseGoals.map((goal) => <CourseGoal id={goal.id} key={goal.id} title={goal.title} description={goal.description} onDelete={DeleteGoalHandler}>A</CourseGoal>)}
    </ul>
    }