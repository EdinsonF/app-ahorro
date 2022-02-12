import React, {createContext, useReducer, useEffect, useState} from 'react'
import estimateReducer from './estimateReducer';
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";
import db from '../../firebase/firebaseConfig';

import {type} from '../../types/type';

export const estimateContext = createContext();

const EstimateProvider = ({children}) => {
  
  const { eventLoadEstimate, eventChangePeriod} = type;
 
  const initialState = {
    estimates : [],
    estimateSelected  : [],
    expenses : []
  }
  
  const [state, dispatch] = useReducer(estimateReducer, initialState);


  useEffect(() => {
    loadEstimates();
  }, [])


  const loadEstimates =  () => {
    
    const unsubscribe =  onSnapshot(collection(db, "estimates"), (rs) => {
      let estimatesArr = [];
      rs.forEach(doc => {
        estimatesArr.push({...doc.data(), id: doc.id})
      })

      dispatch({
      type    : eventLoadEstimate,
      payload : estimatesArr
    })
    })

  }

  const sendEstimate_fn = async (form) => {
    const docRef = await addDoc(collection(db, "estimates"), form)
  }

  
  const selectedPeriodo_fn = (e) => {
    const selected = e.target.value
    dispatch({
      type : eventChangePeriod,
      payload: selected
    })
  }


  return (
    <estimateContext.Provider
      value={{
        estimates : state.estimates,
        estimateSelected: state.estimateSelected,
        sendEstimate_fn,
        selectedPeriodo_fn
      }}
    >
      {children}

    </estimateContext.Provider>
  )
}

export default EstimateProvider
