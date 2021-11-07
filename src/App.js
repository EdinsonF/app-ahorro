import './App.css';

import EstimateProvider from './context/EstimateProvider';
import Estimate from "./Components/Estimate";
import Expenses from './Components/Expenses';

function App() {
  return (

      <div className="container">
        <EstimateProvider>
          <Estimate/>
          <Expenses/>
        </EstimateProvider>
    </div>
  );
}

export default App;
