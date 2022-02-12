import React, {useContext} from 'react'

import {expensesContext} from '../../context/expenses/ExpensesProvider'
import {estimateContext} from '../../context/estimates/EstimateProvider';

const FormExpenses = () => {

const { sendExpenses_fn } = useContext(expensesContext);
const { estimateSelected } = useContext(estimateContext);
const [estimate] = estimateSelected;

let form;
const handleInput = (e) => {
  form = {
    ...form, [e.target.name] : e.target.value
  }
}

const sendForm = () => {
  form.id_estimate = estimate.id;
  sendExpenses_fn(form);
}

  return (
    <div className="form_expenses">
        <input 
          name="count" 
          type="number" 
          placeholder="Cantidad" 
          className="form_input-cantidad"
          onChange={handleInput}
        />
        <input 
          name="name" 
          type="text" 
          placeholder="Nombre"
          onChange={handleInput}

        />
        <input 
          name="price" 
          type="text" 
          placeholder="Precio"
          onChange={handleInput}

        />
        <button type="button" onClick={sendForm}> Registrar</button>
    </div>
  )
}

export default FormExpenses
