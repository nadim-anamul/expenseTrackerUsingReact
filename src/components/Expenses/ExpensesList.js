import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expense</h2>;
    }
    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </ul>
    );
}

export default ExpensesList;
