import React, { useContext, useEffect, useState } from 'react'


import {estimateContext} from '../context/EstimateProvider';

const Expenses = () => {

  const {estimates} = useContext(estimateContext)
 console.log(estimates);
    return (
      <div className="expenses_container">
        <h2>Gatos</h2>
        
          <select>
            {
              estimates.length === 0 || estimates.length === undefined
                ?
                (<option>Seleccione...</option>)
                :
                  estimates.map(element => {
  
                    let fecha = new Date(element.date_start.replace(/-+/g, '/'));
                    return(
                      <option>
                          {fecha.toLocaleString('es-CO', {month: 'long'})}   
                      </option>
                    )
                  })
            }
          </select>
         
      </div>
    )

  
}

export default Expenses
