import Hello from './Components/Hello'
import './App.css'

function App() {
  const name= "My friend"

  return (
    <>
      <Hello name={name}/>
    </>
  )
}

export default App
