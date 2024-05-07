import './ExpenseItems'
import './Expenses.css'
import ExpenseItems from './ExpenseItems'
import Card from './Card'
function Expense(props){

    return(
      <Card className="expenses">
        <ExpenseItems
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItems
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItems
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
      </Card>
    )
}

export default Expense