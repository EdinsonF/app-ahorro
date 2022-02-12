import React, { useContext, useEffect, useState } from 'react'

import {estimateContext} from '../../context/estimates/EstimateProvider';
const Select = () => {

  const {estimates, selectedPeriodo_fn} = useContext(estimateContext)
  console.log(estimates);

  return (
          <select onChange={selectedPeriodo_fn}>
            <option>Seleccione...</option>
            {
                (estimates.length !== 0 || estimates.length !== undefined)  
                  &&
                    estimates.map(element => {
    
                      let fecha = new Date(element.date_start.replace(/-+/g, '/'));
                      return(
                        <option value={element.id} key={element.id}>
                            {fecha.toLocaleString('es-CO', {month: 'long'})}   
                        </option>
                      )
                    })
            }
          </select>
  )
}

export default Select
