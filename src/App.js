import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const expenses = [
  {
    id: "a1",
    title: "bumaga",
    price: 300,
    date: new Date(),
  },
  {
    id: "a2",
    title: "zaryadka",
    price: 243,
    date: new Date(),
  },
];

function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
