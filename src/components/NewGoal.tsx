import {type FormEvent, useRef} from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, description: string) => void;
}


export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);
    function submitHandler(event: FormEvent<HTMLFormElement>) {   

        event.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredDescription = description.current!.value;
        onAddGoal(enteredGoal,enteredDescription);
        console.log(enteredGoal, enteredDescription);
        event.currentTarget.reset();
    }

    return (<form onSubmit={submitHandler}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id = "goal" type="text" ref={goal} />
        </p>
        <p>
            <label htmlFor="description">Short summary</label>
            <input id = "description" type = "text" ref={description} />
        </p>
        <p>
            <button type="submit">Add Goal</button>
        </p>
    </form>);}