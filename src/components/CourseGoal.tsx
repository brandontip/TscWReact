import {type ReactNode} from "react";

type CourseGoalProps = {
    title: string;
    description: string;
    children: ReactNode
}

//can also use PropsWithChildren<title: string, description: string>

export default function CourseGoal({title,description}: CourseGoalProps) {
  return (
    <article>
        <div>
            <h2>{title}</h2> 
            <p>{description}</p>            
        </div>
        <button>Button </button>
    </article>
  );
}