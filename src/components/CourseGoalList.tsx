import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal} from "../App";
import InfoBox from "./InfoBox.tsx";
import {ReactNode} from "react";

type CourseGoalListProps = {
    courseGoals: CGoal[],
    DeleteGoalHandler: (id: string) => void
}

export default function CourseGoalList({courseGoals, DeleteGoalHandler}: CourseGoalListProps) {
    if(courseGoals.length === 0){
        return <InfoBox mode="hint">No goals found. Maybe create one?</InfoBox>
    }

    let warningBox: ReactNode;
    if(courseGoals.length > 6){
        warningBox = <InfoBox mode="warning" severity='medium'>You have a lot of goals!</InfoBox>
    }

    return  (<>
    {warningBox}
    <ul>
       {courseGoals.map((goal) => <CourseGoal id={goal.id} key={goal.id} title={goal.title} description={goal.description} onDelete={DeleteGoalHandler}>A</CourseGoal>)}
    </ul>
    </>);
}