import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/ContextProvider';

const Inputs = () => {
    const { dispatch } = useContext(GlobalContext);
    const [des, setdes] = useState('');
    const [amount, setamount] = useState(0);
    const [type, settype] = useState('inc');

    const handleSubmit = e => {
        e.preventDefault();
        setdes('');
        setamount(0);
        const entry = {
            id: new Date().getTime(),
            des, amount, type
        }
        dispatch({ type: 'ADD_ENTRY', payload: entry })
    }
    return (
        <div className='w-100'>
            <form onSubmit={handleSubmit} className='form d-flex align-items-center flex-wrap justify-content-center'>
                < input type="text" value={des} placeholder='Descreption' className='form-control input-box m-1' onChange={e => setdes(e.target.value)} />
                < input type="number" value={amount} className='form-control input-box m-1' onChange={e => setamount(e.target.value)} />
                <select value={type} className='form-control input-select m-1' onChange={e => settype(e.target.value)}>
                    <option value="inc">+</option>
                    <option value="dec">-</option>
                </select>
                <input type="submit" value="Submit" className='btn btn-primary px-4 m-1' />
            </form >
        </div >
    );
};

export default Inputs;