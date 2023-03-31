import { Routes, Route } from 'react-router-dom';
import Keyboard from './keyboards';
import Form from './Form';
import Name from './Name';


const PenduApp = () =>  {
    return(
        <Routes>
            <Route path='/' element={<Name/>}/>
            <Route path='Form' element={<Form/>}/>
        </Routes>
    )
}

export default PenduApp