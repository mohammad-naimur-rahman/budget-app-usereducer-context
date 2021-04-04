import React, { useContext } from 'react';
import { GlobalContext } from '../context/ContextProvider';

const TableRowInc = ({ income, index }) => {
    const { id, des, amount } = income;
    const { dispatch } = useContext(GlobalContext);
    return (
        <tr>
            <td>{index}</td>
            <td>{des}</td>
            <td>{amount}</td>
            <td className='text-danger action-btn' onClick={() => dispatch({ type: 'DELETE_ITEM', payload: id })}>Delete</td>
        </tr>
    );
};

export default TableRowInc;