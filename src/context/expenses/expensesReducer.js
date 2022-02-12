import React from 'react'

const expensesReducer = (state, action) => {

  switch(action.type){

    case 'uno':
      return {
        ...state
      }

      default:
        return state;
}
}
export default expensesReducer
