import Hearts from './Hearts'
import Keyboard from './keyboards'

function Form(){
    return(
        <div class="Formulaire">
            <Hearts/>
            <h1>Jeu du pendu</h1>
            
            {/* <form action="" method="post">
                <label for="Lettre">Entrez une lettre</label>
                <input type="text" name="lette" id="lettre"></input>
            </form><br /><br /> */}
            <div className='wrapper_new_word'>
                
            </div><br /><br />
          <Keyboard/> 
        </div>
    )
}

export default Form