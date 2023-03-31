import { Link } from 'react-router-dom';
import { useNameContext } from '../Provider/ProviderName';
import { useState } from 'react';

function Name() {
    const [username, setUsername] = useState('');
    const {name} = useNameContext(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        name(username);
        console.log(username);
        };

    return (
        <div class="formulaire_pseudo_contain">
            <div class="contain_two">
                <h1>Jeu du pendu </h1>
                <h4>Jeu dévelopé par Ianis CHENNAF</h4>
                    <form>      
                            <label>Pseudo : </label>
                            <input type="text"/>
                            {/* exemple d'un cas d'utilisation d'une function qui gère la saisie */}

                        <br />

                        {/* <label>
                            Minimum char in the word :
                            <input type="number" value={fmin} onChange={handleChangeFmin} />
                        </label>

                        <br />

                        <label>
                            Maximum char in the word :
                            <input type="number" value={fmax} onChange={handleChangeFmax} />
                        </label> */}

                        <br />
                        <br />

                        {/* condition : si un des inputs est vide, le jeu ne commence pas, géré via les Links (qui en gros sont des routes plus ou moins) */}
                            <Link to="/Form">
                                <button type="submit" onChange={handleSubmit} >Play !</button>
                            </Link>
                               
                        

                    </form>
            </div>
        </div>
    )
}

export default Name;