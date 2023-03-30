import { Routes, Route } from 'react-router-dom';
import Keyboard from './keyboards';
import Form from './Form';

const PenduApp = () =>  {
    return(
        <Routes>
            {/* <Route index element={<Keyboard />} /> */}
            <Route index element={<Form />} />
        </Routes>
    )
}

export default PenduApp