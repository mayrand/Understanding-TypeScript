import type { FormEvent } from "react";

export default function NewGoal() {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();


    }

    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" />
        </p>
        <p>
            <label htmlFor="summary">Your summary</label>
            <input id="summary" type="text" />
        </p>
        <p>
            <button>Add goal</button>
        </p>
    </form>
}