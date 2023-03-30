import { AlphabetProvider } from '../Provider/ProviderDico'
import simpleApp from '../components/simpleApp'
import { useAlphabetContext } from '../Provider/ProviderDico'

function Keyboard(){

    const {letters} = useAlphabetContext()

    return(
        <div>
            <div className="Key">
                {letters.map (a => <button class="test">{a}</button>)}
             </div>
        </div>
               
        
    )
}

export default Keyboard