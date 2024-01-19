import {type ReactNode} from "react";

type CourseGoalProps = {
    id: string
    title: string;
    description: string;
    onDelete: (id: string) => void;
    children: ReactNode
}

//can also use PropsWithChildren<title: string, description: string>

export default function CourseGoal({id, title,description, onDelete}: CourseGoalProps) {
  return (
    <li>
        <div>
            <h2>{title}</h2> 
            <p>{description}</p>            
        </div>
        <button onClick={()=>onDelete(id)}>Delete</button>
    </li>
  );
}