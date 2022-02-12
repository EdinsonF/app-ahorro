import React, {useContext} from 'react'

import {estimateContext} from '../context/estimates/EstimateProvider';
const Estimate = () => {

  const {sendEstimate_fn} = useContext(estimateContext)
  let form;
  const handleSend = (e) => {
    form = {
      ...form, [e.target.name] : e.target.value
    }
  }

  const sendEstimate = () =>{
    sendEstimate_fn(form);
  }

  return (
    <div className="estimate_container">
      <h2>Presupuesto</h2>
      <div className="estimate_container-form">
        <div className="estimate_form-input">
          <div>
            <input 
              type="text" 
              name="estimate" 
              placeholder="Presupuesto" 
              onChange={handleSend}
            />
          </div>

          <div>
            <input 
              type="date"  
              name="date_start"
              onChange={handleSend}
            />
          </div>

          <div>
            <input 
              type="date"  
              name="date_end"
              onChange={handleSend}
            />
          </div>

          <div className="presupuesto_form-option">
            <button 
              className="presupuesto_form-option-btn" 
              onClick={sendEstimate}
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estimate;

