import './App.css'

import Todos from './components/Todos'

function App() {

  const items = ['Learn React','Learn Typescript','Learn Node']
  

  return(
    <div>
      <Todos items={items}/>
    </div>
  )
}

export default App
