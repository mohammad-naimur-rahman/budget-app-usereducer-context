import React, { useContext } from 'react';
import { GlobalContext } from '../context/ContextProvider';

const ShowBalance = () => {
    const { state } = useContext(GlobalContext);
    const incomes = state.entries.filter(inc => inc.type === 'inc');
    const expenses = state.entries.filter(exp => exp.type === 'dec');
    const totalIncome = incomes.reduce((total, curr) => total + parseFloat(curr.amount), 0);
    const totalExpense = expenses.reduce((total, curr) => total + parseFloat(curr.amount), 0);
    const totalBalance = totalIncome - totalExpense;
    return (
        <div className='d-flex align-items-center justify-content-center p-3'>
            <div className="d-flex flex-column align-items-center justify-content-center p-3">
                <h3>Income</h3>
                <h2>{totalIncome}</h2>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center p-3">
                <h3>Balance</h3>
                <h2>{totalBalance}</h2>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center p-3">
                <h3>Expense</h3>
                <h2>{totalExpense}</h2>
            </div>
        </div>
    );
};

export default ShowBalance;