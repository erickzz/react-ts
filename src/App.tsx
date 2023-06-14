import './App.css'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {

  const todos = [
    new Todo('Learn Javascript'),
    new Todo('Learn Typescript'),
    new Todo('Learn Node'),
  ]
  

  return(
    <div>
      <Todos items={todos}/>
    </div>
  )
}

export default App
