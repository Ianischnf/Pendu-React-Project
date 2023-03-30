import { useState, useEffect, useContext, createContext } from 'react';


const AlphabetContext = createContext(null);

export const AlphabetProvider = ({ children }) => {
       const Alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
        "r","s","t","u","w","x","y","z"]


     const [letters, setLetters] = useState(Alphabet);

return(
   
    <AlphabetContext.Provider value={{ letters, setLetters}}>
        {children}
    </AlphabetContext.Provider>
    
)
}

export const useAlphabetContext = () => useContext(AlphabetContext)
