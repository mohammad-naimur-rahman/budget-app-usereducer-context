import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { GlobalContext } from '../context/ContextProvider';
import TableRowExp from './TableRowExp';
import TableRowInc from './TableRowInc';

const Tables = () => {
    const { state } = useContext(GlobalContext);

    const incomes = state.entries.filter(inc => inc.type === 'inc');
    const expenses = state.entries.filter(exp => exp.type === 'dec');
    return (
        <div className='d-flex flex-wrap justify-content-around mx-auto p-4' style={{ maxWidth: '1000px' }}>
            <div>
                <h3>Income Table</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Descreption</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            incomes.map((income, i) => <TableRowInc index={i + 1} key={income.id} income={income} />)
                        }

                    </tbody>
                </Table>
            </div>
            <div>
                <h3>Expense Table</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Descreption</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            expenses.map((expense, i) => <TableRowExp key={expense.id} index={i + 1} expense={expense} />)
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Tables;