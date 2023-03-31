
import './App.css'
import Form from './components/Form';
import { useAlphabetContext } from './Provider/ProviderDico';
import { useNameContext } from './Provider/ProviderName';

function App() {

  const {letters} = useAlphabetContext()
  const { fname } = useNameContext()

  

  return (
    <div className="App">
      {/* <Form /> */}
      {letters.map( letters => <div>{letters}</div>)}
    </div>
  )
}

export default App
