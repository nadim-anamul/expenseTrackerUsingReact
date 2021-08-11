import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const onChangeFilterHandler = (filterYear) => {
        setFilteredYear(filterYear);
        console.log(filterYear);
    };
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <div>
            <div className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilterHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

                <ExpensesList items={filteredExpenses}></ExpensesList>
            </div>
        </div>
    );
};

export default Expenses;
