import logo from './logo.svg';
import './App.css';
import Expense from './components/Expenses'
function App() {
  const expense = [
    {id:'item1' , title:'Car' , amount:'$22202', date: new Date(2024, 4,22)},
    {id:'item2' , title:'Bike' , amount:'$222', date: new Date(2024, 4,22)},
    {id:'item3' , title:'Washing machine' , amount:'$100', date: new Date(2024, 4,22)} 
  ]
  return (
    <div className="App">
      <h1 class="title">Hey my first React App</h1>
      <Expense items={expense}></Expense>
    </div>
  );
}

export default App;
