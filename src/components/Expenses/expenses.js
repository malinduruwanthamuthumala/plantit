function Expenses(props){

    const expenses = props.expenses;

    return(
        <div className="expenses">
            <ExpenseItem 
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}>               
            </ExpenseItem>
        </div>
    );
}

export default Expenses;