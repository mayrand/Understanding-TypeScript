import Header from "./components/Header"
import goalsImg from "./assets/goals.jpg"

function App() {

  return (
    <main>
      <Header image={{src: goalsImg, alt: 'List of goals'}} />
      <h1>Hello world!</h1>
    </main>
  )
}

export default App
