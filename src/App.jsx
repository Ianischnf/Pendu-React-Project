
import './App.css'
import Form from './components/Form';
import { useAlphabetContext } from './Provider/ProviderDico';

function App() {

  const {letters} = useAlphabetContext()

  

  return (
    <div className="App">
      {/* <Form /> */}
      {letters.map( letters => <div>{letters}</div>)}
    </div>
  )
}

export default App
