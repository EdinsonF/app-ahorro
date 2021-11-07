import React, {createContext, useReducer, useEffect, useState} from 'react'
import estimateReducer from './estimateReducer';
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";
import db from '../firebase/firebaseConfig';

import {type} from '../types/type';

export const estimateContext = createContext();

const EstimateProvider = ({children}) => {
  
  const { eventLoadEstimate } = type;
 
  const initialState = {
    estimates : [],
    expenses : []
  }
  
  const [state, dispatch] = useReducer(estimateReducer, initialState);


  useEffect(() => {
    loadEstimates();
  }, [])


  const loadEstimates =  () => {
    let estimatesArr = [];
    const unsubscribe =  onSnapshot(collection(db, "presupuesto"), (rs) => {
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
    const docRef = await addDoc(collection(db, "presupuesto"), form)
  }



  return (
    <estimateContext.Provider
      value={{
        estimates : state.estimates,
        sendEstimate_fn
      }}
    >
      {children}

    </estimateContext.Provider>
  )
}

export default EstimateProvider
