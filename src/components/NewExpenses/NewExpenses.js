import './NewExpenses.css';
import ExpensesForm from './ExpensesForm';
import { useState } from 'react';

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random(),
        };
        props.onAddExpenses(expenseData);
        setIsEditing(false);
        console.log(expenseData);
    };
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && (
                <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpensesForm>
            )}
        </div>
    );
};

export default NewExpenses;
