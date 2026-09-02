import Header from "./components/Header"
import goalsImg from "./assets/goals.jpg"
import CourseGoals from "./components/CourseGoals"
import { useState } from "react"

function App() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Learn TS', description: 'Learn Ts from the ground up' },
    { id: 2, title: 'Practice TS', description: 'Practice Ts from the ground up' }
  ]);

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'List of goals' }}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoals goals={goals} />
    </main>
  )
}

export default App
