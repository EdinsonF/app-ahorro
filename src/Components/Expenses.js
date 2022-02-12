import React, { useContext, useEffect, useState } from 'react'

import ExpensesSelect from './Elements/ExpensesSelect';
import {estimateContext} from '../context/estimates/EstimateProvider';
import ExpensesForm from './Elements/ExpensesForm';


const Expenses = () => {

  const { estimateSelected } = useContext(estimateContext);
  const [estimate] = estimateSelected;
    return (
      <div className="expenses_container">
        <h2>Gatos</h2>
        
          <div className="expenses_select">
            <ExpensesSelect/>
          </div>

          
            {
                (estimateSelected.length !== 0 )  
                  &&
               <>   
                 <div className="expenses_period-selected"> 
                      <div>Inicio: {estimate.date_start}</div>
                      <div>Fin: {estimate.date_end}</div>
                      <div>Presupuesto: {estimate.estimate}</div>
                 </div>

                 <ExpensesForm/>
              </>
            }

          
         
      </div>
    )

  
}

export default Expenses
