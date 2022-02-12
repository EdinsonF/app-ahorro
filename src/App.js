import './App.css';

import EstimateProvider from './context/estimates/EstimateProvider';
import Estimate from "./Components/Estimate";
import Expenses from './Components/Expenses';
import { ExpensesProvider } from './context/expenses/ExpensesProvider';

function App() {
  return (

      <div className="container">
        <EstimateProvider>
          <ExpensesProvider>
            <Estimate/>
            <Expenses/>
          </ExpensesProvider>
        </EstimateProvider>
    </div>
  );
}

export default App;
