import Person from './Components/Person'
import Button from './Components/Button'
import Header from './Components/Header'
import List from './Components/List'
import './App.css'

function App() {


  return (
    <>
      <div className="task1">
         <h1>Task 1</h1>
         <Person name="pawan" age='23'/>
         <h1>Task 2</h1>
         <Button text="Click me!" onClick={() => console.log("Button clicked")} />
         <h1>Task 3</h1>
         <Header title="Welcome to my website!" />
         <h1>Task 4</h1>
         <List items={['apple', 'banana', 'orange']} />

      </div>
    </>
  )
}

export default App
