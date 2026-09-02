import Header from "./components/Header"
import goalsImg from "./assets/goals.jpg"
import CourseGoals from "./components/CourseGoals"
import { useState } from "react"
import NewGoal from "./components/NewGoal";

function App() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Learn TS', description: 'Learn Ts from the ground up' },
    { id: 2, title: 'Practice TS', description: 'Practice Ts from the ground up' }
  ]);

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter(g => g.id !== id))
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals(prevGoals => prevGoals.concat({ id: Math.random(), title: text, description: summary }))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'List of goals' }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  )
}

export default App
