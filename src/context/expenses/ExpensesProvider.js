import React, {createContext, useEffect, useReducer} from 'react'

import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";
import db from '../../firebase/firebaseConfig';

import {type} from '../../types/type';

import expensesReducer from './expensesReducer'
export const expensesContext = createContext();

export const ExpensesProvider = ({children}) => {

  const initialState = {
    expenses : [{test: "test"}]
  }

  const [state, dispatch] = useReducer(expensesReducer, initialState);


  const sendExpenses_fn = async (form) => {
    const docRef = await addDoc(collection(db, "expenses"), form)
  }

  return (
    <expensesContext.Provider 
    value={{
      expenses : state.expenses,
      sendExpenses_fn
    }}>
      {children}
    </expensesContext.Provider>
    
  )
}
